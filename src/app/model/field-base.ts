import { FormGroup } from "@angular/forms";
import { Type } from "@angular/core";
import { Designer } from "./text-field-setting";
import { TextDesigner } from "./designers/text-designer";

export abstract class FieldBase {
  @Designer(new TextDesigner({ title: "Name", group: "General" }))
  name: string;

  @Designer(new TextDesigner({ title: "Condition", group: "General" }))
  condition: string;

  group: string;

  formGroup: FormGroup;
  constructor(name: string) {
    this.name = name;
    this.condition = null;
  }
  abstract component(): Type<any>;
}
