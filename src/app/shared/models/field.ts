export interface IFieldConfig {
  name: string;
  type: string;
  value?: any;
  required?: boolean;
  validations?: any[];
  options?: any[];
  label?: string;
  placeholder?: string;
  validationMessages?: any
}

export interface IFormConfig {
    fields: IFieldConfig[];
}