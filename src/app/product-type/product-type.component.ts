import { Component, OnInit } from "@angular/core";
import { TextField } from "../model/text-field";
import { FormBuilder, FormGroup } from "@angular/forms";
import { FieldBase } from "../model/field-base";
import { TextFieldSetting } from "../model/text-field-setting";

@Component({
  selector: "app-product-type",
  templateUrl: "./product-type.component.html",
  styleUrls: ["./product-type.component.css"]
})
export class ProductTypeComponent implements OnInit {
  fields: Array<FieldBase>;
  formGroup: FormGroup;
  textField: TextFieldSetting;
  constructor(formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({});
  }

  ngOnInit() {
    this.fields = [
      new TextField("FirstName", new TextFieldSetting({ title: "first name" })),
      new TextField("LastName",  new TextFieldSetting({ title: "last name" }))
    ];
    this.textField = this.fields[0].setting;
  }
  getValue(): string {
    return JSON.stringify(this.formGroup.value);
  }
}
