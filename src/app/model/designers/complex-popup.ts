import { DesignerBase } from "./designer-base";
import { FieldBase } from "../field-base";
import { ComplexField } from "../complex-field";

export class ComplexPopup extends DesignerBase {
  setting: any;
  constructor(setting: any) {
    super();
    this.setting = setting;
  }
  getField(name: string): FieldBase {
    return new ComplexField(name, this.setting);
  }
}
