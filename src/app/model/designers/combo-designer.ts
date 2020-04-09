import { DesignerBase } from "./designer-base";
import { FieldBase } from "../field-base";
import { ComboField } from "../combo-field";

export class ComboDesigner extends DesignerBase {
  setting: any;
  constructor(setting: any) {
    super();
    this.setting = setting;
  }
  getField(name: string): FieldBase {
    return new ComboField(name, this.setting);
  }
}
