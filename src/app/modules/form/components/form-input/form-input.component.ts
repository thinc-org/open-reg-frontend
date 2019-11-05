import {
  Component,
  Input,
  AfterViewInit,
  ChangeDetectorRef,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import {
  BaseQuestion,
  QuestionTypes,
  Choices,
} from 'src/app/core/model/questions.model';
import { StoreImageService } from 'src/app/core/services/store-image.service';
import {
  map,
  tap,
  startWith,
  share,
  distinctUntilChanged,
} from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
})
export class FormInputComponent implements AfterViewInit, OnInit, OnDestroy {
  @Input() question: BaseQuestion<any>;
  @Input() form: FormGroup;

  required: boolean;

  subChoices$: Observable<Choices[]>;
  changed$: Observable<boolean>;
  destroy$ = new Subject();

  constructor(
    private imageService: StoreImageService,
    private cdr: ChangeDetectorRef
  ) {
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  saveImage(fileList: FileList) {
    const name = fileList[0].name;
    const validationResult = this.imageService.validateImageName(name);
    this.formControl.setErrors(validationResult);
    this.formControl.markAsTouched();
    this.imageService.saveImage(fileList[0], this.question.key);
  }

  ngOnInit() {
    this.required = this.question.required;
    if (this.question.type === QuestionTypes.SUBCHOICES) {
      this.subChoices$ = this.form
        .get(this.question.dependsOn)
        .valueChanges.pipe(
          startWith(this.form.get(this.question.dependsOn).value),
          distinctUntilChanged(),
          map(parent => this.question.subChoices[parent] || []),
          tap(choices => {
            if (choices && choices.length < 1) {
              this.required = false;
              this.formControl.clearValidators();
            } else {
              this.required = true;
              this.formControl.setValidators([Validators.required]);
            }
          }),
          share()
        );
    }
  }

  ngAfterViewInit() {
    if (this.question.type === QuestionTypes.IMAGE) {
      const validationResult = this.imageService.validateImageName(
        this.imageName
      );
      this.image && this.image.url
        ? this.formControl.setErrors(null)
        : this.formControl.setErrors(validationResult);
      this.cdr.detectChanges();
    } else if (this.question.type === QuestionTypes.SUBCHOICES) {
      this.subChoices$.pipe().subscribe(_ => {
        this.formControl.reset();
      });
    }
  }

  private get image() {
    return this.imageService.getImage(this.question.key);
  }

  get imageData() {
    if (
      this.question.type === 'IMAGE' &&
      this.question.value &&
      this.question.value.length > 0
    ) {
      if (!this.image) {
        this.imageService.saveImage(
          null,
          this.question.key,
          this.question.value
        );
      }
      return this.image.data ? this.image.data : this.image.url;
    }
  }

  get imageName() {
    return this.image ? this.image.name : null;
  }

  get isValid() {
    return this.formControl.valid;
  }
  get currentValue() {
    return this.formControl.value;
  }
  get formControl() {
    return this.form.get(this.question.key);
  }
  get isRequired() {
    return this.formControl.errors.required;
  }
  get isMax() {
    const maxObj = this.formControl.errors.maxlength;
    return maxObj ? maxObj.requiredLength < maxObj.actualLength : false;
  }
  get isMin() {
    const minObj = this.formControl.errors.minlength;
    return minObj ? minObj.requiredLength >= minObj.actualLength : false;
  }
  get dirty() {
    return this.formControl.dirty;
  }
  get touched() {
    return this.formControl.touched;
  }
  get otherInvalid() {
    return (
      !(this.isMax || this.isMin || this.isRequired) && this.formControl.errors
    );
  }
  get label() {
    return this.question.label;
  }
}
