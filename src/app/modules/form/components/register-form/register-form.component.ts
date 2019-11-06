import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseQuestion } from 'src/app/core/model/questions.model';
import { FormService } from '../../form.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent {
  @Input() form: FormGroup;
  currentStep$ = this.formService.currentStep$;
  questions$: BehaviorSubject<BaseQuestion<any>[][]> = this.formService
    .questions$;
  eventName: string = this.formService.eventName;
  processedQuestions$: Observable<BaseQuestion<any>[][]> = this.questions$.pipe(
    map(multiQuestions => {
      const e = multiQuestions[this.currentStep$.value - 1];
      return e ? e.sort((a, b) => a.order - b.order) : [];
    }),
    map(this.reduce)
  );

  constructor(private formService: FormService) {}

  private reduce(array: BaseQuestion<any>[]) {
    return array.reduce((result, question, i) => {
      i % 2 === 0
        ? result.push([question])
        : result[result.length - 1].push(question);
      return result;
    }, []);
  }
}
