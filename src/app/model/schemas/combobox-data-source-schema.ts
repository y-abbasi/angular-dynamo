import { FormControl } from "../form-control";
import { TextField } from "../text-field";
import { RepeaterControl } from "../repeater-control";
import { ContainerControl } from "../container-control";

export class ComboboxDataSourceSchema {
  build(): FormControl {
    return new FormControl("dataSource", {
      containers: [
        new RepeaterControl("items", {
          itemSchema: new ContainerControl("container2", {
            controls: [
              new TextField("Text", { title: "Text" }),
              new TextField("Value", { title: "Value" })
            ]
          })
        })        
      ]
    });
  }
}
