import { Designer } from "./text-field-setting";
import { TextDesigner } from "./designers/text-designer";

export class BaseControl {
  @Designer(new TextDesigner({ title: "Name", group: "General" }))
  name: string;

  @Designer(new TextDesigner({ title: "Condition", group: "General" }))
  condition: string;
  constructor(name: string, settings: any) {
    this.name = name;
    Object.assign(this, settings);
  }
}
