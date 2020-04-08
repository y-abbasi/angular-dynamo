import { Component, OnInit } from '@angular/core';
import { TextField } from '../../model/field-base';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css']
})
export class TextFieldComponent implements OnInit {

  constructor(field: TextField) { }

  ngOnInit() {
  }

}