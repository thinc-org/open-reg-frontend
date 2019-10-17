import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
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
  questions$: BehaviorSubject<BaseQuestion<any>[][]> = this.formService.questions$;
  eventName: string = this.formService.eventName;
  processedQuestions$: Observable<BaseQuestion<any>[][]> = this.questions$.pipe(
    switchMap(questions => of(questions[this.currentStep$.value - 1])),
    map(e => (e ? e.sort((a, b) => a.order - b.order) : [])),
    map(this.reduce)
  );

  constructor(private formService: FormService) {}

  get step() {
    return this.formService.groups[this.formService.currentStep$.value - 1];
  }

  private reduce(array: BaseQuestion<any>[]) {
    return array.reduce((result, question, i) => {
      i % 2 === 0
        ? result.push([question])
        : result[result.length - 1].push(question);
      return result;
    }, []);
  }
}
