import {
  Component,
  Input,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TextboxQuestion } from 'src/app/core/model/questions.model';
import { StoreImageService } from 'src/app/core/services/store-image.service';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
})
export class FormInputComponent implements AfterViewInit {
  @Input() question: TextboxQuestion;
  @Input() form: FormGroup;

  constructor(
    private imageService: StoreImageService,
    private cdr: ChangeDetectorRef
  ) {}

  saveImage(fileList: FileList) {
    const name = fileList[0].name;
    const validationResult = this.imageService.validateImageName(name);
    this.formControl.setErrors(validationResult);
    this.formControl.markAsTouched();
    this.imageService.saveImage(fileList[0], this.question.key);
  }

  ngAfterViewInit() {
    if (this.question.type === 'IMAGE') {
      const validationResult = this.imageService.validateImageName(
        this.imageName
      );
      this.formControl.setErrors(validationResult);
      this.cdr.detectChanges();
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
      return this.question.value;
    }
    return this.image ? this.image.data : null;
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
