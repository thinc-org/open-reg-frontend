import { ValidatorFn, AbstractControlOptions } from '@angular/forms';

export class BaseQuestion<T> {
  order: number;
  value: T;
  label: string;
  title: string;
  description: string;
  // required: boolean;
  choices: string[];
  key: string;
  controlType: string;
  validators: ValidatorFn | ValidatorFn[] | AbstractControlOptions;

  constructor(options: QuestionOptions<T> = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    // this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.description = options.description || '';
    this.title = options.title || '';
    this.validators = options.validators || [];
  }
}

export class DropdownQuestion extends BaseQuestion<string> {
  controlType = 'dropdown';
  choices: string[] = [];

  constructor(options: QuestionOptions<string> = {}) {
    super(options);
    this.choices = options.options || [];
  }
}

export class TextboxQuestion extends BaseQuestion<string> {
  controlType = 'textbox';
  type: string;

  constructor(options: QuestionOptions<string> = {}) {
    super(options);
    this.type = options.type || '';
  }
}

export enum QuestionTypes {
  RADIO = 'RADIO', // not implemented
  CHECKBOX = 'CHECKBOX', // not implemented
  TEXT = 'TEXT',
  EMAIL = 'EMAIL',
  PHONE = 'PHONE',
  COLOR = 'COLOR', // not implemented
  DATE = 'DATE', // not implemented
  TIME = 'TIME', // not implemented
  DROPDOWN = 'DROPDOWN',
}

export interface QuestionModel {
  order: number;
  type: QuestionTypes;
  title: string;
  choices: string[];
  required: boolean;
  description: string;
}

export interface QuestionOptions<T> {
  value?: T;
  key?: string;
  label?: string;
  options?: string[];
  type?: string;
  // required?: boolean;
  order?: number;
  title?: string;
  description?: string;
  validators?: ValidatorFn | ValidatorFn[] | AbstractControlOptions;
}
