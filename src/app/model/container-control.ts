import { BaseControl } from "./base-control";
import { ContainerControlComponent } from "../components/container-control/container-control.component";
import { Type } from "@angular/core";
import { FormGroup } from "@angular/forms";

export class ContainerControl extends BaseControl{
  controls: Array<BaseControl>;
  constructor(name: string, settigns: any){
    super(name, settigns);
  }
  component():Type<any>{
    return ContainerControlComponent;
  }
  
  _formGroup : FormGroup;
  set formGroup(val: FormGroup){
    this._formGroup = val;
    this.controls.forEach(item => item.formGroup = this._formGroup);
  }
  get formGroup(){
    return this._formGroup;
  }
}