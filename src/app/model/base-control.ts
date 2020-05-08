import { Designer } from "./text-field-setting";
import { TextDesigner } from "./designers/text-designer";
import { Type } from "@angular/core";
import { FormGroup } from "@angular/forms";

export abstract class BaseControl {
  private _name: string;
  @Designer(new TextDesigner({ title: "Name", group: "General" }))
  set name(val: string) {
    this._name = val;
  }
  get name(): string {
    return this._name;
  }

  @Designer(new TextDesigner({ title: "Condition", group: "General" }))
  condition: string;

  private _formGroup: FormGroup;
  set formGroup(val: FormGroup) {
    if (!this.setupFormGroup) debugger;
    this.setupFormGroup(val);
    this._formGroup = val;
  }
  get formGroup() {
    return this._formGroup;
  }
  constructor(name: string, settings: any) {
    this.name = name;
    this.condition = "";
    Object.assign(this, settings);
  }
  abstract component(): Type<any>;
  abstract setupFormGroup(formGroup: FormGroup);
}
