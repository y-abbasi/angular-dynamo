function Type(type) {
  return Reflect.metadata("design:type", type);
}

// Decorator application
export class TextFieldSetting {
  constructor() {}

  @Type({type: String, maxLength: 10})
  title: String;

  @Type({type: "Combo", items: ["text", "password", "phone", "email", "url"]})
  type: String;
}

// Metadata introspection
// let obj = new TextFieldSetting();
// let paramTypes = Reflect.getMetadata("design:paramtypes", obj, "add");
// debugger;
