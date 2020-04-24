import { Component, OnInit, Input } from "@angular/core";
import { ContainerControl } from "../../model/container-control";

@Component({
  selector: "app-container-control",
  templateUrl: "./container-control.component.html",
  styleUrls: ["./container-control.component.css"]
})
export class ContainerControlComponent implements OnInit {
  @Input() field: ContainerControl;
  constructor() {}

  ngOnInit() {}
}
