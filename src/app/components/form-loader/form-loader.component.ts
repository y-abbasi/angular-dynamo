import { Component, OnInit, Input, SimpleChanges } from "@angular/core";
import { FieldBase } from "../../model/field-base";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-form-loader",
  templateUrl: "./form-loader.component.html",
  styleUrls: ["./form-loader.component.css"]
})
export class FormLoaderComponent implements OnInit {
  @Input() fields: Array<FieldBase>;
  @Input() formGroup: FormGroup;
  constructor() {}

  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges) {
    this.prepareForm();
  }
  ngDoCheck(a) {
    this.prepareForm();
  }
  prepareForm() {
    this.fields.forEach(a => {
      this.formGroup.addControl(a.name, new FormControl());
      a.formGroup = this.formGroup;
    });
  }
}
