import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { BaseQuestion } from 'src/app/core/model/questions.model';
import { FormService } from '../../form.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-register-term',
  templateUrl: './register-term.component.html',
  styleUrls: ['./register-term.component.scss'],
})
export class RegisterTermComponent implements OnInit {
  @Input() form: FormGroup;
  currentStep$ = this.formService.currentStep$;
  questions$: BehaviorSubject<BaseQuestion<any>[][]> = this.formService
    .questions$;
  eventName: string = this.formService.eventName;
  processedQuestions$: Observable<BaseQuestion<any>[]> = this.questions$.pipe(
    map(multiQuestions => {
      const e = multiQuestions[this.currentStep$.value - 1];
      return e ? e.sort((a, b) => a.order - b.order) : [];
    })
  );
  constructor(private formService: FormService) {}

  getFormControl(key) {
    return this.form.get(key);
  }

  ngOnInit() {}
}
