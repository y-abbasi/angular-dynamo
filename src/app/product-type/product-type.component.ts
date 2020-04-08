import { Component, OnInit } from "@angular/core";
import { FieldBase, TextField } from "../model/text-field";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-product-type",
  templateUrl: "./product-type.component.html",
  styleUrls: ["./product-type.component.css"]
})
export class ProductTypeComponent implements OnInit {
  fields: Array<FieldBase>;
  formGroup: FormGroup;
  formBuilder: FormBuilder;
  constructor(formBuilder: FormBuilder) {
    this.formBuilder = formBuilder;
  }

  ngOnInit() {
    this.formBuilder.group({
      "FirstName":'yasser'
    })
    this.fields = [new TextField("FirstName", {title: "first name"}, this.formGroup)];
  }
}
