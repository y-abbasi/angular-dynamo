import { FormGroup } from "@angular/forms";
import { Type } from "@angular/core";
import { Designer } from "./text-field-setting";
import { FieldBase } from "./field-base";
import { FormControl } from "./form-control";

export abstract class ComplexField extends FieldBase {
  //group: string;
  formControl: FormControl;
  constructor(name: string, settings: any) {
    super(name, settings);
  }
  set formGroup(val: FormGroup) {
    super.formGroup = val;
    this.formControl.formGroup = val;
  }

  setupFormGroup(formGroup: FormGroup) {
    this.formControl.setupFormGroup(formGroup);
  }
}
