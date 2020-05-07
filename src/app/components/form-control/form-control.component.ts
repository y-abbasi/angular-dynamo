import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormControl } from "../../model/form-control";
import { ContainerControl } from "../../model/container-control";

@Component({
  selector: "app-form-control",
  templateUrl: "./form-control.component.html",
  styleUrls: ["./form-control.component.css"]
})
export class FormControlComponent implements OnInit {
  @Input() field: FormControl;
  temp: ContainerControl;
  constructor() {
  }

  ngOnInit() {
    this.temp = new ContainerControl("", {maxColumn: 3, formGroup: new FormGroup({}), controls: []});

  }
  controlsAddedToTemp(cntr){
    this.temp.formGroup = this.field.formGroup;
    this.temp.maxColumn = this.field.columnsCount;
    this.field.containers.push(this.temp);
    this.temp = new ContainerControl("", {maxColumn: this.field.columnsCount, controls: []});
  }
}
