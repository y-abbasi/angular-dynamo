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
    if (this.formControl === undefined)
      this.formControl = settings.formControlBuilder.build();
    this.formControl.name = name;
  }

  private _formGroup: FormGroup;
  set formGroup(val: FormGroup) {
    this._formGroup = val;
    this.setupFormGroup(val);
    this.formControl.formGroup = val.controls[this.name] as FormGroup;
  }
  get formGroup() {
    return this._formGroup;
  }

  setupFormGroup(formGroup: FormGroup) {
    var subForm = new FormGroup({});
    formGroup.addControl(this.name, subForm);
    this.formControl.setupFormGroup(subForm);
  }
  component(): Type<any> {
    return ComplexFieldComponent;
  }
  clone(): ComplexField {
    var copy = new ComplexField(this.name, {});
    copy.formControl = this.formControl.clone();
    return copy;
  }
}
