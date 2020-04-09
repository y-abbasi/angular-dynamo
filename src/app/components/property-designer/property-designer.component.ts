import { Component, OnInit, Input, SimpleChanges } from "@angular/core";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { FieldBase } from "../../model/field-base";
import { SchemaBuilderService } from "../../services/schema-builder.service";

@Component({
  selector: "app-property-designer",
  templateUrl: "./property-designer.component.html",
  styleUrls: ["./property-designer.component.css"]
})
export class PropertyDesignerComponent implements OnInit {
  @Input() object: any;
  formGroup: FormGroup;
  schema: Array<FieldBase>;
  schemaBuilder: SchemaBuilderService;

  constructor(schemaBuilder: SchemaBuilderService) {
    this.schemaBuilder = schemaBuilder;
  }

  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges) {
    this.prepareForm();
  }
  private prepareForm() {
    this.formGroup = new FormGroup({});
    this.schema = this.schemaBuilder.create(this.object);
    var value = {};
    this.schema.forEach(item => {
      item.formGroup = this.formGroup;
      this.formGroup.addControl(item.name, new FormControl());
      value[item.name] = this.object[item.name];
    });
    this.formGroup.setValue(value);
    this.formGroup.valueChanges.subscribe(data => {
      Object.assign(this.object, data);
    });
  }
}
