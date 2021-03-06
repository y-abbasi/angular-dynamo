import {
  Component,
  OnInit,
  Input,
  ChangeDetectorRef,
  SimpleChanges,
  Type
} from "@angular/core";
import { BaseControl } from "../../model/base-control";
import { FormGroup } from "@angular/forms";
import { FieldBase } from "../../model/field-base";
import { TextFieldComponent } from "../text-field/text-field.component";
import { ComboFieldComponent } from "../combo-field/combo-field.component";
import { GetMetaData } from "../../model/text-field-setting";
import {
  copyArrayItem,
  CdkDragDrop,
  moveItemInArray
} from "@angular/cdk/drag-drop";
import { TextField } from "../../model/text-field";
import { CheckboxField } from "../../model/checkbox-field";
import { ComboField } from "../../model/combo-field";
import { EventAggregatorService } from "../../services/event-aggregator.service";
import { ComponentSelected } from "../../model/messages/component-selected";
import { FormControl } from "../../model/form-control";

@Component({
  selector: "app-form-designer",
  templateUrl: "./form-designer.component.html",
  styleUrls: ["./form-designer.component.css"],
  providers: [EventAggregatorService]
})
export class FormDesignerComponent implements OnInit {
  fields: Array<BaseControl>;
  @Input("fields") set setFields(value: Array<BaseControl>) {
    this.fields = value;
    this.selectControl(value[0]);
  }
  formGroup: FormGroup;
  constructor(private ref: ChangeDetectorRef, private eventAggregator: EventAggregatorService) {
    this.eventAggregator.subscribe(ComponentSelected, (e) => this.selectControl(e.component));
  }
  tools: Array<Type<any>> = [TextField, ComboField, CheckboxField];
  selectedControl: BaseControl;
  selectControl(controlToSelect) {
    this.selectedControl = null;
    setTimeout(() => {
      this.selectedControl = controlToSelect;
      this.ref.markForCheck();
    }, 10);
  }
  toolbars() {
    return this.tools.map(item => {
      var meta = GetMetaData(item);
      meta.component = item;
      return meta;
    });
  }
  addForm(){
    this.fields.push(new FormControl("Form1", {title: "Form Title"}));
  }
  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges) {
    this.formGroup = new FormGroup({});
    this.prepareForm();
  }
  ngDoCheck(a) {
    this.prepareForm();
  }

  reorder(event: CdkDragDrop<Array<any>>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.fields, event.previousIndex, event.currentIndex);
    } else {
      this.fields.splice(
        event.currentIndex,
        0,
        new event.previousContainer.data[event.previousIndex].component("name")
      );
    }
  }

  prepareForm() {
    if (!this.fields) return;
    this.fields.forEach(a => {
      a.formGroup = this.formGroup;
    });
    this.ref.markForCheck();
  }
  visible: boolean = true;
  reload() {
    this.visible = false;
    setTimeout(() => {
      this.visible = true;
      this.ref.markForCheck();
    }, 100);
  }
}
