import { Component, OnInit, Input } from "@angular/core";
import { FieldBase } from "../../model/field-base";

@Component({
  selector: "app-field-loader",
  templateUrl: "./field-loader.component.html",
  styleUrls: ["./field-loader.component.css"]
})
export class FieldLoaderComponent implements OnInit {
  @Input() field: FieldBase;
  constructor() {}

  ngOnInit() {}
}
