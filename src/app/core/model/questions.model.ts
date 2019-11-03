import { ValidatorFn, AbstractControlOptions } from '@angular/forms';

export class BaseQuestion<T> {
  order: number;
  value: T;
  label: string;
  type: string;
  title: string;
  description: string;
  required: boolean;
  dependsOn?: string;
  choices: { label: string; value: string }[];
  subChoices?: { [key: string]: { label: string; value: string }[] };
  key: string;
  controlType: string;
  group: number;

  constructor(
    options: QuestionOptions<T> = {},
    public validators: ValidatorFn | ValidatorFn[] | AbstractControlOptions
  ) {
    this.value = options.value;
    this.key = options.key || '';
    this.type = options.type;
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.title = options.title || '';
    this.group = options.group;
    this.dependsOn = options.dependsOn;
  }
}

export class DropdownQuestion extends BaseQuestion<string> {
  controlType = 'dropdown';

  constructor(
    options: QuestionOptions<string> = {},
    subType?: string,
    validators: ValidatorFn | ValidatorFn[] | AbstractControlOptions = []
  ) {
    super(options, validators);
    this.choices = options.choices || [];
    this.controlType = subType;
    this.subChoices = options.subChoices;
  }
}

export class MultipleChoiceQuestion extends BaseQuestion<string> {
  controlType = 'multiple-choice';

  constructor(
    options: QuestionOptions<string> = {},
    subType?: string,
    validators: ValidatorFn | ValidatorFn[] | AbstractControlOptions = []
  ) {
    super(options, validators);
    this.choices = options.choices || [];
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
  SUBCHOICES = 'SUBCHOICES',
}

export interface QuestionModel {
  order: number;
  type: QuestionTypes;
  _id: number;
  key: string;
  label: string;
  choices: { label: string; value: string }[];
  required: boolean;
  group: number;
}

export interface QuestionOptions<T> {
  value?: T;
  key?: string;
  label?: string;
  options?: string[];
  type?: QuestionTypes;
  dependsOn?: string;
  subChoices?: { [key: string]: { label: string; value: string }[] };
  order?: number;
  title?: string;
  description?: string;
  validators?: ValidatorFn | ValidatorFn[] | AbstractControlOptions;
  group?: number;
  choices?: { label: string; value: string }[];
  subType?: string;
  required?: boolean;
}
