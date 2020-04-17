import { FieldBase } from "./field-base";
import { FormGroup } from "@angular/forms";
import { TextFieldComponent } from "../components/text-field/text-field.component";
import { Type } from "@angular/core";
import { ComboDesigner } from "./designers/combo-designer";
import { TextDesigner } from "./designers/text-designer";
import { Designer } from "./text-field-setting";

export class TextField extends FieldBase {
  constructor(name: string, setting: any) {
    super(name);
    this.title = "title 1";
    this.type = "text";
    this.mask = null;
    Object.assign(this, setting);
  }
  component(): Type<any> {
    return TextFieldComponent;
  }
  
  @Designer(new TextDesigner({ title: "Title" }))
  title: String;

  @Designer(new TextDesigner({ title: "Mask", condition: "type == 'text'" }))
  mask: String;

  @Designer(
    new ComboDesigner({
      title: "Type",
      items: ["text", "number", "password", "phone", "email", "url"]
    })
  )
  type: String;

}
