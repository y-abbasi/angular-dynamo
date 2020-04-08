import { FieldBase } from "./field-base";
import { FormGroup } from "@angular/forms";
import { TextFieldComponent } from "../components/text-field/text-field.component";
import { Type } from "@angular/core";

export class TextField extends FieldBase {
  constructor(name: string, setting: any) {
    super(name, setting);
  }
  component(): Type<any> {
    return TextFieldComponent;
  }
}
