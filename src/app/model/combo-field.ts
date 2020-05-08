import { FieldBase } from "./field-base";
import { ComboFieldComponent } from "../components/combo-field/combo-field.component";
import { Type } from "@angular/core";
import { Designer } from "./text-field-setting";
import { ComplexPopup } from "./designers/complex-popup";
import { FormControl } from "./form-control";
import { ComboboxDataSourceSchema } from "./schemas/combobox-data-source-schema";

@Designer({ title: "Combobox" })
export class ComboField extends FieldBase {
  name: string;
  items: Array<any>;
  constructor(name: string, setting: any) {
    super(name, setting);
    this.dataSource = {};
    Object.assign(this, setting);
  }
  component(): Type<any> {
    return ComboFieldComponent;
  }
  getItems(): Array<[string, string]> {
    let items: Array<any> = this.items;
    return items.map(it => (typeof it === "string" ? [it, it] : it));
  }
  @Designer(
    new ComplexPopup({
      title: "Data Source",
      group: "Data Source",
      formControlBuilder: new ComboboxDataSourceSchema(),
      displayField: "name"
    })
  )
  dataSource: any;

  clone(): ComboField {
    return new ComboField(this.name, this);
  }
}
