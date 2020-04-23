import { Component, OnInit, Input } from "@angular/core";
import { TextField } from "../../model/text-field";
import { TextFieldSetting, Designer } from "../../model/text-field-setting";
import { EvaluatorService } from "../../services/evaluator.service";

@Component({
  selector: "app-text-field",
  templateUrl: "./text-field.component.html",
  styleUrls: ["./text-field.component.css"]
})
export class TextFieldComponent implements OnInit {
  @Input() field: TextField;
  constructor(private evaluator: EvaluatorService) {}

  ngOnInit() {
  }
  isMaskedInput(){
    return this.isTextInput() && this.mask();
  }
  isTextInput(){
    return this.field.type === "text";
  }
  isNumberInput(){
    return this.field.type === "number";
  }
  mask(){
    return this.field.mask;
  }
  visible(){
    return this.field.condition ? this.evaluator.eval(this.field.formGroup.value, this.field.condition) : true;
  }
}
