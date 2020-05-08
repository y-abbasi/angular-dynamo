import { FormControl } from "../form-control";
import { TextField } from "../text-field";

export class ComboboxDataSourceSchema {
  build(): FormControl {
    return new FormControl("dataSource", {
      containers: [new TextField("name", {})]
    });
  }
}
