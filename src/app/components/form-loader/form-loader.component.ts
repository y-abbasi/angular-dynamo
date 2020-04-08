import { Component, OnInit, Input } from "@angular/core";
import { FieldBase } from "../../model/field-base";

@Component({
  selector: "app-form-loader",
  templateUrl: "./form-loader.component.html",
  styleUrls: ["./form-loader.component.css"]
})
export class FormLoaderComponent implements OnInit {
  @Input() fields: Array<FieldBase>;

  constructor() {}

  ngOnInit() {}
}
