import { BaseControl } from "./base-control";

export class ContainerControl extends BaseControl{
  controls: Array<BaseControl>;
  constructor(name: string, settigns: any){
    super(name, settigns);
  }
}