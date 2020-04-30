import { Component, OnInit, Input } from "@angular/core";
import { CheckboxField } from "../../model/checkbox-field";

@Component({
  selector: "app-checkbox-field",
  templateUrl: "./checkbox-field.component.html",
  styleUrls: ["./checkbox-field.component.css"]
})
export class CheckboxFieldComponent implements OnInit {
  @Input() field: CheckboxField;
  constructor() {}

  ngOnInit() {}
}
