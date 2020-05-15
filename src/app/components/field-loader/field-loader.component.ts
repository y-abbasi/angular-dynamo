import { Component, OnInit, Input, DoCheck, Inject, forwardRef } from "@angular/core";
import { FieldBase } from "../../model/field-base";
import { EventAggregatorService } from "../../services/event-aggregator.service";
import { ComponentSelected } from "../../model/messages/component-selected";

@Component({
  selector: "app-field-loader",
  templateUrl: "./field-loader.component.html",
  styleUrls: ["./field-loader.component.css"]
})
export class FieldLoaderComponent implements OnInit, DoCheck {
  @Input() field: FieldBase;
  constructor(@Inject(forwardRef(() => EventAggregatorService))private eventAggregator: EventAggregatorService) {}

  ngOnInit() {}
  ngDoCheck() {}
  selectControl(c, e) {
    this.eventAggregator.publish(new ComponentSelected(c));
    e.preventDefault();
    e.stopPropagation();
  }
}
