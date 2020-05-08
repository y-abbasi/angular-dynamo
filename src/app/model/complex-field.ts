import { FormGroup, FormControl } from "@angular/forms";
import { Type } from "@angular/core";
import { Designer } from "./text-field-setting";
import { FieldBase } from "./field-base";

export abstract class ComplexField extends FieldBase {
  //group: string;
  constructor(name: string, settings: any) {
    super(name, settings);
  }

  _formGroup: FormGroup;
  set formGroup(val: FormGroup) {
    if (val) val.addControl(this.name, new FormGroup({}));
    this._formGroup = val;
  }
  get formGroup() {
    return this._formGroup;
  }
}
