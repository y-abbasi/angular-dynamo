import {
  Component,
  OnInit,
  NgZone,
  ChangeDetectorRef,
  ChangeDetectionStrategy
} from "@angular/core";
import { TextField } from "../model/text-field";
import { FormBuilder, FormGroup } from "@angular/forms";
import { FieldBase } from "../model/field-base";
import {
  moveItemInArray,
  CdkDragDrop,
  transferArrayItem
} from "@angular/cdk/drag-drop";

@Component({
  selector: "app-product-type",
  templateUrl: "./product-type.component.html",
  styleUrls: ["./product-type.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductTypeComponent implements OnInit {
  fields: Array<FieldBase>;
  formGroup: FormGroup;
  textField: any;
  constructor(private ref: ChangeDetectorRef) {}
  visible: boolean = true;
  ngOnInit() {
    this.formGroup = new FormGroup({});
    this.fields = [
      new TextField("FirstName", { title: "first name" }),
      new TextField("LastName", { title: "last name" })
    ];
    //this.fields.forEach(a => a.group = "group")
    this.textField = this.fields[0];
  }
  getValue(): string {
    return JSON.stringify(this.formGroup.value);
  }
  selectField(field: FieldBase) {
    this.textField = field;
  }
  addField() {
    var name = prompt("name");
    this.fields = [...this.fields, new TextField(name, { title: name })];
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }
}
