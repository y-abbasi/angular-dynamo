import { BaseControl } from "./base-control";
import { ContainerControlComponent } from "../components/container-control/container-control.component";
import { Type } from "@angular/core";

export class ContainerControl extends BaseControl{
  controls: Array<BaseControl>;
  constructor(name: string, settigns: any){
    super(name, settigns);
  }
  component():Type<any>{
    return ContainerControlComponent;
  }
}