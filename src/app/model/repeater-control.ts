import { BaseControl } from "./base-control";
import { FormGroup, FormArray } from "@angular/forms";
import { ContainerControl } from "./container-control";
import { Type } from "@angular/core";
import { RepeaterControlComponent } from "../components/repeater-control/repeater-control.component";

export class RepeaterControl extends BaseControl {
  itemSchema: () => ContainerControl;
  editable: boolean;
  insertable: boolean;
  removable: boolean;
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
    this.formGroup.addControl(this.name, new FormArray([]));
  }
  component(): Type<any> {
    return RepeaterControlComponent;
  }
  addNewItem() {
    if (this.insertable !== true) return;
    var itemFormGroup = new FormGroup({});
    this.itemSchema().setupFormGroup(itemFormGroup);
    this.items.push(itemFormGroup);
  }
  private get items(): FormArray {
    return this.formGroup.controls[this.name] as FormArray;
  }
  removeAt(index: number) {
    this.items.removeAt(index);
  }
}
