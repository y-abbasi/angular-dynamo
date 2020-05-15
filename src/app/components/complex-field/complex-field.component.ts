import { Component, OnInit, TemplateRef, Inject, forwardRef } from "@angular/core";
import {
  DialogService,
  DialogRef,
  DialogCloseResult
} from "@progress/kendo-angular-dialog";
import { ComplexField } from "../../model/complex-field";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-complex-field",
  templateUrl: "./complex-field.component.html",
  styleUrls: ["./complex-field.component.css"]
})
export class ComplexFieldComponent implements OnInit {
  field: ComplexField;
  constructor(@Inject(forwardRef(() => DialogService))private dialogService: DialogService) {}

  ngOnInit() {}

  openForm(innerForm: TemplateRef<any>) {
    const formGroup = this.field.formGroup;
    const originalValue = formGroup.controls[this.field.name].value;
    const dialog: DialogRef = this.dialogService.open({
      title: "Please confirm",
      content: innerForm,
      actions: [{ text: "Cancel" }, { text: "Ok", primary: true }]
    });
    dialog.result.subscribe(result => {
      console.log(result);
      if (result instanceof DialogCloseResult || result.primary !== true) {
        formGroup.controls[this.field.name].patchValue(originalValue);
      }
    });
  }
}
