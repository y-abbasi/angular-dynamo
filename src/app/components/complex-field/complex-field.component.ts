import { Component, OnInit, TemplateRef } from "@angular/core";
import { DialogService } from "@progress/kendo-angular-dialog";
import { ComplexField } from "../../model/complex-field";

@Component({
  selector: "app-complex-field",
  templateUrl: "./complex-field.component.html",
  styleUrls: ["./complex-field.component.css"]
})
export class ComplexFieldComponent implements OnInit {
  field: ComplexField;
  constructor(private dialogService: DialogService) {}

  ngOnInit() {}

  openForm(innerForm: TemplateRef<any>) {
    this.dialogService.open({
      title: "Please confirm",
      content: innerForm,
      actions: [{ text: "No" }, { text: "Yes", primary: true }]
    });
  }
}
