import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormControl } from "../../model/form-control";

@Component({
  selector: "app-form-control",
  templateUrl: "./form-control.component.html",
  styleUrls: ["./form-control.component.css"]
})
export class FormControlComponent implements OnInit {
  @Input() field: FormControl;
  constructor() {}

  ngOnInit() {}
  
}
