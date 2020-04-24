import { FieldBase } from "./field-base";
import { FormGroup } from "@angular/forms";
import { TextFieldComponent } from "../components/text-field/text-field.component";
import { Type } from "@angular/core";
import { ComboDesigner } from "./designers/combo-designer";
import { TextDesigner } from "./designers/text-designer";
import { Designer } from "./text-field-setting";

@Designer({title: "Textbox"})
export class TextField extends FieldBase {
  constructor(name: string, setting: any) {
    super(name, setting);
    this.title = "title 1";
    this.mask = null;
    this.type = "text";
    this.min = null;
    this.max = null;
    Object.assign(this, setting);
  }
  component(): Type<any> {
    return TextFieldComponent;
  }
  
  @Designer(new TextDesigner({ title: "Title", group: "General" }))
  title: String;

  @Designer(new TextDesigner({ title: "Mask", condition: "type == 'text'", group: "Special" }))
  mask: String;

  @Designer(new TextDesigner({ title: "Min Value", condition: "type == 'number'", group: "Special" }))
  min: Number;

  @Designer(new TextDesigner({ title: "Max Value", condition: "type == 'number'", group: "Special" }))
  max: Number;

  @Designer(
    new ComboDesigner({
      title: "Type",
      items: ["text", "number", "password", "phone", "email", "url"], group: "General"
    })
  )
  type: String;

}
