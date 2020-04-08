import { Component, OnInit, Input } from "@angular/core";
import { FieldBase } from "../../model/field-base";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-form-loader",
  templateUrl: "./form-loader.component.html",
  styleUrls: ["./form-loader.component.css"]
})
export class FormLoaderComponent implements OnInit {
  @Input() fields: Array<FieldBase>;
  formBuilder: FormBuilder;
  formGroup: FormGroup;
  constructor(formBuilder: FormBuilder) {
    this.formBuilder = formBuilder;
  }

  ngOnInit() {
    var g = {};
    this.fields.forEach(a => g[a.name] = new FormControl());
    this.formGroup = new FormGroup(g);
  }
}
