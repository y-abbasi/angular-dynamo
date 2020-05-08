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
  set formGroup(val: FormGroup) {
    super.formGroup = val;
    this.formControl.formGroup = val;
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
