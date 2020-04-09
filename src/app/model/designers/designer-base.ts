import { FieldBase } from "./field-base";

export abstract class DesignerBase {
  abstract getField(name: string):FieldBase;
}