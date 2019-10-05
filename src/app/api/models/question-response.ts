/* tslint:disable */
export interface QuestionResponse {
  _id: string;
  order: number;
  group: number;
  type: string;
  label: string;
  key: string;
  value: string;
  choices: Array<string>;
  required: boolean;
  description?: string;
}
