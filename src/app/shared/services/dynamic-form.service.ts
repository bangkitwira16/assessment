import { Injectable } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { IFieldConfig, IFormConfig } from '../models/field';

@Injectable({
  providedIn: 'root',
})
export class DynamicFormService {
  constructor(private formBuilder: FormBuilder) {}

  // Method to generate form based on provided configuration
  generateForm(config: IFormConfig): FormGroup {
    const formGroup = this.formBuilder.group({});

    // Loop through each field configuration
    config.fields.forEach((field: IFieldConfig) => {
      const validators = [];

      // Add required validator if the field is marked as required
      if (field.required) {
        validators.push(Validators.required);
      }

      // Create form control based on field type and value
      if (field.validations && Array.isArray(field.validations)) {
        validators.push(...field.validations);
      }

      const control = this.getFormControl(field, validators);

      // Add form control to the form group
      formGroup.addControl(field.name, control);
    });

    return formGroup;
  }

  // Method to create form control based on field configuration
  private getFormControl(field: any, validators: any[]): AbstractControl {
    // Create form control based on field type
    if (field.type === 'checkbox') {
      return this.formBuilder.control(false, validators);
    } else {
      return this.formBuilder.control(field.value || '', validators);
    }
  }
}
