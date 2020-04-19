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

  groups: Array<GroupSet>;
  ngOnInit() {
    //this.groups = [new GroupSet("", this.fields)];
    this.groups = this.groupBy(this.fields, "group");
  }
  ngOnChanges(changes: SimpleChanges) {
    this.prepareForm();
  }
  ngDoCheck(a) {
    this.prepareForm();
  }
  groupBy(xs:Array<FieldBase>, key: string): Array<GroupSet> {
    return xs.reduce((rv, x) => {
      var group =rv.find(a => a.title == x[key]);
      if(group == null)
        rv.push(group = new GroupSet(x[key], []));
      group.fields.push(x);
      return rv;
    }, new Array<GroupSet>());
  }
  prepareForm() {
    this.fields.forEach(a => {
      this.formGroup.addControl(a.name, new FormControl());
      a.formGroup = this.formGroup;
    });
  }
}
class GroupSet {
  constructor(public title: string, public fields: Array<FieldBase>) {
    this.fields = fields || [];
  }
}