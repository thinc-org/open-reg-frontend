import { Component, OnInit } from '@angular/core';
import { FormService } from '../../form.service';
import { StoreImageService } from 'src/app/core/services/store-image.service';

@Component({
  selector: 'app-register-confirm',
  templateUrl: './register-confirm.component.html',
  styleUrls: ['./register-confirm.component.scss'],
})
export class RegisterConfirmComponent implements OnInit {
  eventName = this.formService.eventName;
  step = this.formService.groups;
  questions$ = this.formService.questions$;
  constructor(
    private formService: FormService,
    private imageService: StoreImageService
  ) {}

  getImage(_key: string) {
    const image = this.imageService.getImage(_key);
    return image ? image.data : null;
  }

  get length(): number {
    return this.questions$.value.length;
  }

  ngOnInit() {}
}
