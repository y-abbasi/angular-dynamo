import { TextDesigner } from "./designers/text-designer";
import { ComboDesigner } from "./designers/combo-designer";

function Type(type) {
  return Reflect.metadata("design:type", type);
}

// Decorator application
export class TextFieldSetting {
  constructor() {
    this.title = "title";
    this.type = "text";
  }

  @Type(new TextDesigner({ title: "Title" }))
  title: String;

  // @Type({type: "Combo", items: ["text", "password", "phone", "email", "url"]})
  @Type(
    new ComboDesigner({
      title: "Type",
      items: ["text", "password", "phone", "email", "url"]
    })
  )
  type: String;
}
