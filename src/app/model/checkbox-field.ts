import { FieldBase } from "./field-base";
import { Type } from "@angular/core";
import { Designer } from "./text-field-setting";
import { CheckboxFieldComponent } from "../components/checkbox-field/checkbox-field.component";
import { TextDesigner } from "./designers/text-designer";

@Designer({ title: "checkbox" })
export class CheckboxField extends FieldBase {
  static defaults: any = { title: "checkbox" };
  constructor(name: string, settings: any) {
    super(name, settings);
    Object.assign(this, CheckboxField.defaults);
    Object.assign(this, settings);
  }
  component(): Type<any> {
    return CheckboxFieldComponent;
  }
  @Designer(new TextDesigner({ title: "Title", group: "General" }))
  title: string;

}
