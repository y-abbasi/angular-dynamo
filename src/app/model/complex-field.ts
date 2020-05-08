import { FormGroup } from "@angular/forms";
import { Type } from "@angular/core";
import { Designer } from "./text-field-setting";
import { FieldBase } from "./field-base";
import { FormControl } from "./form-control";
import { ComplexFieldComponent } from "../components/complex-field/complex-field.component";

export class ComplexField extends FieldBase {
  //group: string;
  formControl: FormControl;
  constructor(name: string, settings: any) {
    super(name, settings);
    this.formControl.name = name;
  }

  private _formGroup: FormGroup;
  set formGroup(val: FormGroup) {
    if (!this.setupFormGroup) debugger;
    this.setupFormGroup(val);
    this._formGroup = val;
  }
  get formGroup() {
    return this._formGroup;
  }

  setupFormGroup(formGroup: FormGroup) {
    var subForm = new FormGroup({});
    formGroup.addControl(this.name, subForm);
    this.formControl.setupFormGroup(subForm);
  }
  component(): Type<any>{
    return ComplexFieldComponent;
  }
}