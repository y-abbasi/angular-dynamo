import { FieldBase } from "./field-base";
import { FormGroup } from "@angular/forms";
import { TextFieldComponent } from "../components/text-field/text-field.component";
import { Type } from "@angular/core";
import { ComboDesigner } from "./designers/combo-designer";
import { TextDesigner } from "./designers/text-designer";
import { Designer } from "./text-field-setting";

export class TextField extends FieldBase {
  constructor(name: string, setting: any) {
    super(name, setting);
  }
  component(): Type<any> {
    return TextFieldComponent;
  }
  
  @Designer(new TextDesigner({ title: "Title" }))
  title: String;

  @Designer(
    new ComboDesigner({
      title: "Type",
      items: ["text", "password", "phone", "email", "url"]
    })
  )
  type: String;

}
