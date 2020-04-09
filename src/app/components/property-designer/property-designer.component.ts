import { Component, OnInit, Input } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { FieldBase } from "../../model/field-base";

@Component({
  selector: "app-property-designer",
  templateUrl: "./property-designer.component.html",
  styleUrls: ["./property-designer.component.css"]
})
export class PropertyDesignerComponent implements OnInit {
  @Input() object: any;
  formGroup: FormGroup;
  schema: Array<FieldBase>;
  constructor() {}

  ngOnInit() {
    this.formGroup = new FormGroup({});
    for (var prop in this.object) {
      this.add(this.object, prop);
    }
  }
}
