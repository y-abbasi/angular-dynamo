import { Component, OnInit, Input } from "@angular/core";
import { TextField } from "../../model/text-field";
import { TextFieldSetting } from "../../model/text-field-setting";

@Component({
  selector: "app-text-field",
  templateUrl: "./text-field.component.html",
  styleUrls: ["./text-field.component.css"]
})
export class TextFieldComponent implements OnInit {
  @Input() field: TextField;
  constructor() {}

  ngOnInit() {
  }
}
