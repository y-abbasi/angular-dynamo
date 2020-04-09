import { DesignerBase } from "./designer-base";
import { FieldBase } from "../field-base";
import { TextField } from "../text-field";

export class TextDesginer extends DesignerBase {
  setting: any;
  constructor(setting: any) {
    super();
    this.setting = setting;
  }
  getField(name: string): FieldBase {
    return new TextField(name, this.setting);
  }
}
