import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { FormService } from './form.service';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api/services';
import { Observable } from 'rxjs';
import { StoreImageService } from 'src/app/core/services/store-image.service';
import { flatten } from 'src/app/core/functions/flatten';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [FormService],
})
export class FormComponent implements OnInit, OnDestroy {
  currentStep$ = this.formService.currentStep$;

  @Output() submitForm = new EventEmitter<any>();
  @Input() formId = '';
  @Input() formData: Observable<any>;

  constructor(
    private router: Router,
    private formService: FormService,
    private api: ApiService,
    private imageService: StoreImageService
  ) {}

  ngOnInit() {
    this.imageService.clear();
    if (this.formData) {
      this.formService.initializeForm(null, this.formData);
    } else {
      this.formService.initializeForm(this.formId, null);
    }
  }

  get eventName() {
    return this.formService.eventName;
  }

  get form() {
    return this.formService.form;
  }

  get steps() {
    return this.formService.groups;
  }

  get currentStepType() {
    const isLastStep =
      this.formService.currentStep$.value === this.steps.length;
    if (isLastStep) {
      return 'confirm';
    } else if (this.formService.questions$.value[0]) {
      return 'form';
    }
    return 'loading';
  }

  get currentStepObj() {
    return this.steps[this.currentStep$.value - 1]
      ? this.steps[this.currentStep$.value - 1]
      : { title: null, description: null, n: 1 };
  }

  get currentFormObj() {
    return this.form ? this.form.controls[this.currentStep$.value - 1] : null;
  }

  get totalSteps() {
    return this.steps.length;
  }

  async completeForm() {
    /* Normalize form object from steps **/
    const unNestedAnswers: any = Object.values(this.form.value).reduce(
      (a, c) => ({ ...a, ...c }),
      {}
    );
    /* get image from local storage, converting to binary and adding into answers */
    const answers = {
      answers: unNestedAnswers,
    };
    const images = this.imageService.getImages();
    for (const image of images) {
      if (image.data) {
        await fetch(image.data)
          .then(res => res.blob())
          .then(blob => {
            answers[image.key] = new File([blob], image.name);
          });
      } else {
        answers[image.key] = image.url;
      }
      delete answers.answers[image.key];
    }

    /* Flatten answers and convert to formData */
    const flattenAnswers = flatten(answers);
    const formData = new FormData();
    Object.keys(flattenAnswers).forEach(key => {
      formData.append(key, flattenAnswers[key]);
    });

    /* Submit form */
    if (this.formId) {
      formData.append('form', this.formId);
      this.api
        .postResponse(formData as any)
        .subscribe(_ => this.router.navigate(['success']));
    }
    this.submitForm.emit(formData);
  }

  nextStep() {
    if (this.currentStep$.value === this.totalSteps) {
      this.completeForm();
    } else {
      this.currentStep$.next(this.currentStep$.value + 1);
    }
  }

  previousStep() {
    this.currentStep$.next(this.currentStep$.value - 1);
  }

  ngOnDestroy() {
    this.formService.complete();
    this.imageService.clear();
  }
}
