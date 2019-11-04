import { ValidatorFn, AbstractControlOptions } from '@angular/forms';

export class BaseQuestion<T> {
  order: number;
  value: T;
  label: string;
  title: string;
  description: string;
  required: boolean;
  choices: Choices[];
  key: string;
  controlType: string;
  group: number;
  image?: string;

  constructor(
    options: QuestionOptions<T> = {},
    public validators: ValidatorFn | ValidatorFn[] | AbstractControlOptions
  ) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.title = options.title || '';
    this.group = options.group;
    this.image = options.image;
    this.description = options.description;
  }
}

export class DropdownQuestion extends BaseQuestion<string> {
  controlType = 'dropdown';
  choices: Choices[] = [];

  constructor(
    options: QuestionOptions<string> = {},
    subType?: string,
    validators: ValidatorFn | ValidatorFn[] | AbstractControlOptions = []
  ) {
    super(options, validators);
    console.log(options);
    this.choices = options.choices || [];
    this.value = options.choices
      ? options.choices.findIndex(obj => {
          return obj.value === options.value;
        }) + ''
      : null;
    this.controlType = subType;
  }
}

export class TextboxQuestion extends BaseQuestion<string> {
  controlType = 'textbox';
  type: string;

  constructor(
    options: QuestionOptions<string> = {},
    validators: ValidatorFn | ValidatorFn[] | AbstractControlOptions = []
  ) {
    super(options, validators);
    this.type = options.type || '';
  }
}

export enum QuestionTypes {
  RADIO = 'RADIO',
  CHECKBOX = 'CHECKBOX', // not implemented
  TEXT = 'TEXT',
  EMAIL = 'EMAIL',
  PHONE = 'PHONE',
  COLOR = 'COLOR', // not implemented
  DATE = 'DATE', // not implemented
  TIME = 'TIME', // not implemented
  DROPDOWN = 'DROPDOWN',
  IMAGE = 'IMAGE',
}

export interface QuestionModel {
  order: number;
  type: QuestionTypes;
  _id: number;
  key: string;
  label: string;
  choices: Choices[];
  required: boolean;
  group: number;
  image?: string;
  description?: string;
}

export interface QuestionOptions<T> {
  value?: T;
  key?: string;
  label?: string;
  options?: string[];
  type?: string;
  order?: number;
  title?: string;
  description?: string;
  validators?: ValidatorFn | ValidatorFn[] | AbstractControlOptions;
  group?: number;
  choices?: Choices[];
  subType?: string;
  required?: boolean;
  image?: string;
}

interface Choices {
  key: string;
  value: string;
}
