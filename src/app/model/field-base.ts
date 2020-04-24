import { FormGroup } from "@angular/forms";
import { Type } from "@angular/core";
import { Designer } from "./text-field-setting";
import { TextDesigner } from "./designers/text-designer";
import { BaseControl } from "./base-control";

export abstract class FieldBase extends BaseControl {

  group: string;

  formGroup: FormGroup;
  constructor(name: string, settings: any) {
    super(name, settings);
    this.condition = null;
  }
  abstract component(): Type<any>;
}
