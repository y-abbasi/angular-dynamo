import { FormGroup } from "@angular/forms";
import { Type } from "@angular/core";
import { Designer } from "./text-field-setting";
import { TextDesigner } from "./designers/text-designer";
import { BaseControl } from "./base-control";

export abstract class FieldBase extends BaseControl {
  @Designer(new TextDesigner({ title: "Name", group: "General" }))
  name: string;

  @Designer(new TextDesigner({ title: "Condition", group: "General" }))
  condition: string;

  group: string;

  formGroup: FormGroup;
  constructor(name: string) {
    super();
    this.name = name;
    this.condition = null;
  }
  abstract component(): Type<any>;
}
