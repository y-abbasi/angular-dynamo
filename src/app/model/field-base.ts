import { FormGroup } from "@angular/forms";
import { Type } from "@angular/core";
import { Designer } from "./text-field-setting";
import { TextDesigner } from "./designers/text-designer";

export abstract class FieldBase {
  @Designer(new TextDesigner({ title: "Name" }))
  name: string;
  formGroup: FormGroup;
  constructor(name: string) {
    this.name = name;
  }
  abstract component(): Type<any>;
}
