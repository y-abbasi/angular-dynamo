import { FieldBase } from "./field-base";
import { ComboFieldComponent } from "../components/combo-field/combo-field.component";
import { Type } from "@angular/core";

export class ComboField extends FieldBase {
    constructor(name: string, setting: any) {
    super(name, setting);
  }
  component(): Type<any> {
    return ComboFieldComponent;
  }
  getItems():Array<[string, string]>{
    let items : Array<any>;
    items = this.setting.items;
    return items.map(it => (typeof(it) === "string") ? [it, it] : it);
  }
}