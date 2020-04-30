import { Component, OnInit, Input } from '@angular/core';
import { FieldBase } from '../../model/field-base';

@Component({
  selector: 'app-combo-field',
  templateUrl: './combo-field.component.html',
  styleUrls: ['./combo-field.component.css']
})
export class ComboFieldComponent implements OnInit {
  @Input() field: FieldBase;
  constructor() { }

  ngOnInit() {
  }

  visible(){
    return this.field.condition ? this.evaluator.eval(this.field.formGroup.value, this.field.condition) : true;
  }
}