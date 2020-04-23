import { FieldBase } from "./field-base";
import { ComboFieldComponent } from "../components/combo-field/combo-field.component";
import { Type } from "@angular/core";
import { Designer } from "./text-field-setting";

@Designer({title: "Combobox"})
export class ComboField extends FieldBase {
  name: string;
  items: Array<any>;
  constructor(name: string, setting:any) {
    super(name);
    Object.assign(this, setting);
  }
  component(): Type<any> {
    return ComboFieldComponent;
  }
  getItems(): Array<[string, string]> {
    let items: Array<any> = this.items;
    return items.map(it => (typeof it === "string" ? [it, it] : it));
  }
}
