import { BaseControl } from "./base-control";

export class ContainerComponent extends BaseControl{
  controls: Array<BaseControl>;
  constructor(name: string, settigns: any){
    super(name, settigns);
  }
}