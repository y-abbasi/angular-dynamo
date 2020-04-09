import { FieldBase } from "./field-base";
import { ComboFieldComponent } from "../components/combo-field/combo-field.component";
import { Type } from "@angular/core";
import { Designer } from "./text-field-setting";

export class ComboField extends FieldBase {
  @Designer({title:"name"})
  name: string;
  items: Array<any>;
  constructor(name: string) {
    super(name);
  }
  component(): Type<any> {
    return ComboFieldComponent;
  }
  getItems(): Array<[string, string]> {
    let items: Array<any> = this.items;
    return items.map(it => (typeof it === "string" ? [it, it] : it));
  }
}
