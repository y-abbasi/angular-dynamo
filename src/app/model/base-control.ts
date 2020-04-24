import { Designer } from "./text-field-setting";
import { TextDesigner } from "./designers/text-designer";
import { Type } from "@angular/core";

export abstract class BaseControl {
  @Designer(new TextDesigner({ title: "Name", group: "General" }))
  name: string;

  @Designer(new TextDesigner({ title: "Condition", group: "General" }))
  condition: string;

  constructor(name: string, settings: any) {
    this.name = name;
    this.condition = "";
    Object.assign(this, settings);
  }
  abstract component(): Type<any>;
}
