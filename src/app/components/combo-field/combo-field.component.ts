import { Component, OnInit, Input } from '@angular/core';
import { FieldBase } from '../../model/field-base';
import { ComboField } from '../../model/combo-field';

@Component({
  selector: 'app-combo-field',
  templateUrl: './combo-field.component.html',
  styleUrls: ['./combo-field.component.css']
})
export class ComboFieldComponent implements OnInit {
  @Input() field: ComboField;
  constructor() { }

  ngOnInit() {
  }

  visible(){
    return this.field.condition ? this.evaluator.eval(this.field.formGroup.value, this.field.condition) : true;
  }
  dataSource(){
    return this.field.items || this.field.dataSource.items;
  }
}