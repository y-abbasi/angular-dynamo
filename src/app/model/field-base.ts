import { FormGroup, FormControl } from "@angular/forms";
import { Type } from "@angular/core";
import { Designer } from "./text-field-setting";
import { TextDesigner } from "./designers/text-designer";
import { BaseControl } from "./base-control";

export abstract class FieldBase extends BaseControl {
  //group: string;
  constructor(name: string, settings: any) {
    super(name, settings);
  }

  private _formGroup: FormGroup;
  set formGroup(val: FormGroup) {
    this.setupFormGroup(val);
    this._formGroup = val;
  }
  get formGroup() {
    return this._formGroup;
  }

  setupFormGroup(formGroup: FormGroup) {
    if (formGroup) formGroup.addControl(this.name, new FormControl());
  }

}
