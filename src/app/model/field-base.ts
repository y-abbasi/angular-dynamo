import { FormGroup } from "@angular/forms";
import { Component } from "@angular/compiler/src/core";

export abstract class FieldBase {
  label: string;
  formGroup: FormGroup;
  abstract createComponent(): Component;
}
export class TextField extends FieldBase {
  createComponent(): Component {
    
  }
}
