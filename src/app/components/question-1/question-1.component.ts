import {
  JsonPipe,
  KeyValuePipe,
  NgFor,
  NgIf,
  NgSwitch,
  NgSwitchCase,
} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IFieldConfig, IFormConfig } from '../../shared/models/field';
import { DynamicFormService } from '../../shared/services/dynamic-form.service';

@Component({
  selector: 'app-question-1',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgFor,
    NgIf,
    NgSwitchCase,
    KeyValuePipe,
    JsonPipe,
    KeyValuePipe,
  ],
  templateUrl: './question-1.component.html',
  styleUrl: './question-1.component.scss',
})
export class Question1Component implements OnInit {
  form: FormGroup = new FormGroup({});
  config: IFormConfig = {
    fields: [
      {
        name: 'firstName',
        required: true,
        type: 'text',
        placeholder: 'First Name',
        label: 'First Name',
        validations: [Validators.required, Validators.minLength(3)],
        validationMessages: {
          required: 'First Name is required.',
          minlength: 'First Name should be at least 3 characters long.',
        },
      },
      {
        name: 'lastName',
        required: true,
        type: 'text',
        placeholder: 'Last Name',
        label: 'Last Name',
        validations: [Validators.required],
        validationMessages: {
          required: 'Last Name is required.',
        },
      },
      {
        name: 'email',
        required: true,
        type: 'email',
        placeholder: 'Email',
        label: 'Email',
        validations: [Validators.required, Validators.email],
        validationMessages: {
          required: 'Email is required.',
          email: 'Please enter a valid email address.',
        },
      },
      // Other fields...
    ],
  };
  constructor(private dynamicFormService: DynamicFormService) {}

  ngOnInit(): void {
    // call dynamicFormService using above configurations
    this.form = this.dynamicFormService.generateForm(this.config);
    console.log(this.form);
  }

  onSubmit() {
    if (this.form.valid) {
      // Handle form submission
    } else {
      // Form is invalid, handle accordingly
      return;
    }
  }

  getFieldType(field: IFieldConfig): string {
    return field.type;
  }
}
