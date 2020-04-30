import { FieldBase } from "./field-base";
import { Type } from "@angular/core";

export class CheckboxField extends FieldBase {
  constructor(name: string, settings: any) {
    super(name, settings);
  }
  component(): Type<any> {
    return CheckboxFieldComponent;
  }
}
