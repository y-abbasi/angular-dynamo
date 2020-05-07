import { Component, OnInit, Input } from "@angular/core";
import { ContainerControl } from "../../model/container-control";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";
import { BaseControl } from "../../model/base-control";

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
      moveItemInArray(
        this.field.controls,
        event.previousIndex,
        event.currentIndex
      );
    } else if (
      event.previousContainer.data[event.previousIndex] instanceof BaseControl
    ) {
      transferArrayItem(
        event.previousContainer.data,
        this.field.controls,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      this.field.controls.splice(
        event.currentIndex,
        0,
        new event.previousContainer.data[event.previousIndex].component(
          "name",
          { title: "title" }
        )
      );
    }
  }
  predicateMaxControls() {
    var that = this;
    return  () => that.field.controls.length < that.field.maxColumn;
  }
}
