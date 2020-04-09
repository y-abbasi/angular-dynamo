import { FormGroup } from "@angular/forms";
import { Type } from "@angular/core";
import { Designer } from "./text-field-setting";

export abstract class FieldBase {
  @Designer({title:"name"})
  name: string;
  formGroup: FormGroup;
  constructor(name: string) {
    this.name = name;
  }
  abstract component(): Type<any>;
}
