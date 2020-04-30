import { BaseControl } from "./base-control";
import { ContainerControl } from "./container-control";
import { Designer } from "./text-field-setting";
import { TextDesigner } from "./designers/text-designer";
import { Type } from "@angular/core";
import { FormControlComponent } from "../components/form-control/form-control.component";
import { FormGroup } from "@angular/forms";

export class FormControl extends BaseControl {
  constructor(name: string, settings: any) {
    super(name, settings);
    this.columnsCount = 1;
  }
  private setContainerFormGroup(){
    this._containers.forEach(item => item.formGroup = this._formGroup);

  }
  _containers: Array<ContainerControl>;
  set containers(containers: Array<ContainerControl>) {
    this._containers = containers;
    this._columnsCount = containers.length;
    this.setContainerFormGroup();
  }
  get containers() {
    return this._containers;
  }
  private _columnsCount;
  @Designer(
    new TextDesigner({ title: "Columns", type: "number", min: 1, max: 3 })
  )
  set columnsCount(value: number) {
    for (let i = this._columnsCount; i < value; i++) {
      this.containers.push(new ContainerControl("Container" + i, {formGroup: this._formGroup, controls: []}));
    }
    this.containers.splice(value, 3);
    this._columnsCount = value;
  }
  get columnsCount(): number {
    return this._columnsCount;
  }
  _formGroup : FormGroup;
  set formGroup(val: FormGroup){
    this._formGroup = val;
    this.setContainerFormGroup();
  }
  get formGroup(){
    return this._formGroup;
  }
  component(): Type<any> {
    return FormControlComponent;
  }
}
