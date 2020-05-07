import { BaseControl } from "./base-control";
import { ContainerControlComponent } from "../components/container-control/container-control.component";
import { Type } from "@angular/core";
import { FormGroup } from "@angular/forms";

export class ContainerControl extends BaseControl {
  constructor(name: string, settigns: any) {
    super(name, settigns);
  }
  component(): Type<any> {
    return ContainerControlComponent;
  }
  public maxColumn: number;
  _formGroup: FormGroup;
  set formGroup(val: FormGroup) {
    this._formGroup = val;
    if (this._controls)
      this._controls.forEach(item => (item.formGroup = this._formGroup));
  }
  get formGroup() {
    return this._formGroup;
  }
  _controls: Array<BaseControl>;
  set controls(val: Array<BaseControl>) {
    this._controls = val;
    if (val) val.forEach(c => (c.formGroup = this._formGroup));
  }
  get controls() {
    return this._controls;
  }
}
