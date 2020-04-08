import { FormGroup } from "@angular/forms";
import { Component } from "@angular/compiler/src/core";
import { Type } from "@angular/core";
import { TextFieldComponent } from "../components/text-field/text-field.component";

export abstract class FieldBase {
  setting: any;
  formGroup: FormGroup;
  constructor(name: string, setting: any, formGroup: FormGroup) {}
  abstract component(): Type<any>;
}
export class TextField extends FieldBase {
  constructor(name: string, setting: any, formGroup: FormGroup) {
    super(name, setting, formGroup);
  }
  component(): Type<any> {
    return TextFieldComponent;
  }
}
