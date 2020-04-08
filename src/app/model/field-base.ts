import { FormGroup } from "@angular/forms";
import { Component } from "@angular/compiler/src/core";
import { Type } from "@angular/core";
import { TextFieldComponent } from "../components/text-field/text-field.component";

export abstract class FieldBase {
  label: string;
  formGroup: FormGroup;
  abstract component(): Type<any>;
}
export class TextField extends FieldBase {
  component(): Type<any> {
    return TextFieldComponent;
  }
}
