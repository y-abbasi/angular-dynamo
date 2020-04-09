import { Injectable } from "@angular/core";
import { FieldBase } from "../model/field-base";
import { DesignerBase } from "../model/designers/designer-base";

@Injectable()
export class SchemaBuilderService {
  constructor() {}
  create(obj: any): Array<FieldBase> {
    debugger;
    let res = new Array<FieldBase>();
    for(var p in obj){
      let meta = <DesignerBase> Reflect.getMetadata("design:type", obj, p);
      if(meta){
        res.push(meta.getField(p));
      }
    }
    return res;
  }
}
