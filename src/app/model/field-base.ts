import { FormGroup } from "@angular/forms";
import { Type } from "@angular/core";

export abstract class FieldBase {
  setting: any;
  formGroup: FormGroup;
  constructor(name: string, setting: any, formGroup: FormGroup) {}
  abstract component(): Type<any>;
}
