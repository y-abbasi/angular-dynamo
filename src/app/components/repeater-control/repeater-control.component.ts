import { Component, OnInit, Input } from "@angular/core";
import { RepeaterControl } from "../../model/repeater-control";

@Component({
  selector: "app-repeater-control",
  templateUrl: "./repeater-control.component.html",
  styleUrls: ["./repeater-control.component.css"]
})
export class RepeaterControlComponent implements OnInit {
  @Input() field: RepeaterControl;
  constructor() {}

  ngOnInit() {}
}
