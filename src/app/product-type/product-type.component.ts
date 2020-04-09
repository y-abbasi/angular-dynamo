import { Component, OnInit, NgZone, ChangeDetectorRef } from "@angular/core";
import { TextField } from "../model/text-field";
import { FormBuilder, FormGroup } from "@angular/forms";
import { FieldBase } from "../model/field-base";

@Component({
  selector: "app-product-type",
  templateUrl: "./product-type.component.html",
  styleUrls: ["./product-type.component.css"]
})
export class ProductTypeComponent implements OnInit {
  fields: Array<FieldBase>;
  formGroup: FormGroup;
  textField: any;
  constructor() {}

  ngOnInit() {
    this.formGroup = new FormGroup({});
    this.fields = [
      new TextField("FirstName", { title: "first name" }),
      new TextField("LastName", { title: "last name" })
    ];
    this.textField = this.fields[0];
  }
  getValue(): string {
    return JSON.stringify(this.formGroup.value);
  }
  selectField(field: FieldBase) {
    this.textField = field;
  }
  addField() {
    var name = prompt("name");
    this.fields.push(new TextField(name, { title: name }));
  }
}
