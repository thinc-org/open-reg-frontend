import { Component, Input } from '@angular/core';
import { BaseQuestion } from '../../model/questions.model';
import { FormGroup } from '@angular/forms';
import { RegisterService } from 'src/app/modules/register/register.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent {
  @Input() form: FormGroup;
  questions$: BehaviorSubject<BaseQuestion<any>[]> = this.registerService
    .questions$;
  eventName: string = this.registerService.eventName;
  processedQuestions$: Observable<BaseQuestion<any>[][]> = this.questions$.pipe(
    map(e => (e ? e.sort((a, b) => a.order - b.order) : [])),
    map(this.reduce)
  );

  constructor(private registerService: RegisterService) {}

  private reduce(array: BaseQuestion<any>[]) {
    return array.reduce((result, question, i) => {
      i % 2 === 0
        ? result.push([question])
        : result[result.length - 1].push(question);
      return result;
    }, []);
  }
}
