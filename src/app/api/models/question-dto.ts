/* tslint:disable */
export interface QuestionDTO {
  type: string;
  label: string;
  key: string;
  group: number;
  order: number;
  choices: Array<string>;
  required: boolean;
  description: string;
}
