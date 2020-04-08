import { FieldBase } from "./field-base";
import { FormGroup } from "@angular/forms";
import { TextFieldComponent } from "../components/text-field/text-field.component";
import { Type } from "@angular/core";

export class TextField extends FieldBase {
  constructor(name: string, setting: any, formGroup: FormGroup) {
    super(name, setting, formGroup);
  }
  component(): Type<any> {
    return TextFieldComponent;
  }
}
