/* tslint:disable */
import { FormGroupResponse } from './form-group-response';
import { QuestionResponse } from './question-response';
export interface FormResponse {
  _id: string;
  eventId: string;
  groups: Array<FormGroupResponse>;
  questions: Array<QuestionResponse>;
  title: string;
  description?: string;
}
