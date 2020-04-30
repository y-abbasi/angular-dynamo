import { Component, OnInit, Input } from "@angular/core";
import { ContainerControl } from "../../model/container-control";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";

@Component({
  selector: "app-container-control",
  templateUrl: "./container-control.component.html",
  styleUrls: ["./container-control.component.css"]
})
export class ContainerControlComponent implements OnInit {
  @Input() field: ContainerControl;
  constructor() {}

  ngOnInit() {}

  reorder(event: CdkDragDrop<Array<any>>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.field.controls, event.previousIndex, event.currentIndex);
    } else {
      this.field.cons.splice(
        event.currentIndex,
        0,
        new event.previousContainer.data[event.previousIndex].component("name")
      );
    }
  }}
