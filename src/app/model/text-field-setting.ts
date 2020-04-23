import { TextDesigner } from "./designers/text-designer";
import { ComboDesigner } from "./designers/combo-designer";

export function Designer(type) {
  return Reflect.metadata("design:type", type);
}
export function GetMetaData(type){
  return Reflect.getMetadata("design:type", type);
}

// Decorator application
// export class TextFieldSetting {
  // constructor(arg: any) {
  //   this.title = "title";
  //   this.type = "text";
  //   for(var p in arg)
  //   this[p] = arg[p];
  // }

  // @Designer(new TextDesigner({ title: "Title" }))
  // title: String;

  // // @Type({type: "Combo", items: ["text", "password", "phone", "email", "url"]})
  // @Designer(
  //   new ComboDesigner({
  //     title: "Type",
  //     items: ["text", "password", "phone", "email", "url"]
  //   })
  // )
  // type: String;
//}
