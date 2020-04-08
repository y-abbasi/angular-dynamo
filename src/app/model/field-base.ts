import { FormGroup } from "@angular/forms";
import { Type } from "@angular/core";

export abstract class FieldBase {
  name: string;
  setting: any;
  formGroup: FormGroup;
  constructor(name: string, setting: any, formGroup: FormGroup) {
    this.name = name;
    this.setting = setting;
    this.formGroup = formGroup;
  }
  abstract component(): Type<any>;
}
