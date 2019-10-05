/* tslint:disable */
import { FormGroupDTO } from './form-group-dto';
import { QuestionDTO } from './question-dto';
export interface CreateFormDTO {
  eventId: string;
  title: string;
  groups: Array<FormGroupDTO>;
  description: string;
  questions: Array<QuestionDTO>;
}
