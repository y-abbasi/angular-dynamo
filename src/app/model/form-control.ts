import { BaseControl } from "./base-control";
import { ContainerControl } from "./container-control";
import { Designer } from "./text-field-setting";
import { TextDesigner } from "./designers/text-designer";
import { Type } from "@angular/core";
import { FormControlComponent } from "../components/form-control/form-control.component";

export class FormControl extends BaseControl {
  constructor(name: string, settings: any) {
    super(name, settings);
  }
  containers: Array<ContainerControl> = [];
  private _columnsCount;
  @Designer(
    new TextDesigner({ title: "Columns", type: "number", min: 1, max: 3 })
  )
  set columnsCount(value: number) {
    for(let i = this._columnsCount; this._columnsCount < value; i++){
      this.containers.push(new ContainerControl("Container" + i, {}))
    }
    this.containers.splice(value, 3);
    this._columnsCount = value;
  }
  get columnsCount(): number {
    return this._columnsCount;
  }
   component(): Type<any>{
     return FormControlComponent;
   }

}
