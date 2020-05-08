import { BaseControl } from "./base-control";
import { ContainerControl } from "./container-control";
import { Designer } from "./text-field-setting";
import { TextDesigner } from "./designers/text-designer";
import { Type } from "@angular/core";
import { FormControlComponent } from "../components/form-control/form-control.component";
import { FormGroup } from "@angular/forms";

@Designer({ title: "Form" })
export class FormControl extends BaseControl {
  constructor(name: string, settings: any) {
    super(name, settings);
    this.columnsCount = this.columnsCount || 1;
  }
  private setContainerFormGroup() {
    this._containers.forEach(item => (item.formGroup = this._formGroup));
  }
  private _title: string = "title 1";
  @Designer(new TextDesigner({ title: "Title", group: "General" }))
  set title(title: string) {
    this._title = title;
  }
  get title() {
    return this._title;
  }

  _containers: Array<ContainerControl>;
  set containers(containers: Array<ContainerControl>) {
    this._containers = containers;
    this._columnsCount = containers.length;
    this.setContainerFormGroup();
  }
  get containers() {
    return this._containers || (this._containers = []);
  }
  private _columnsCount;
  @Designer(
    new TextDesigner({ title: "Columns", type: "number", min: 1, max: 4 })
  )
  set columnsCount(value: number) {
    this.containers.forEach(item => (item.maxColumn = value));
    this._columnsCount = value;
  }
  get columnsCount(): number {
    return this._columnsCount || (this._columnsCount = 0);
  }
  private _formGroup: FormGroup;
  set formGroup(val: FormGroup) {
    this.setupFormGroup(val);
    this._formGroup = val;
    this.setContainerFormGroup();
  }
  get formGroup() {
    return this._formGroup;
  }

  component(): Type<any> {
    return FormControlComponent;
  }
  setupFormGroup(formGroup: FormGroup) {
    this.containers.forEach(c => c.setupFormGroup(formGroup));
  }
}
