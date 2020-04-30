import { Injectable } from "@angular/core";

@Injectable()
export class EventAggregatorService {
  constructor() {}
  private mapping: {} = {};
  public subscribe(T: Function, handler) {
    var handlers = this.mapping[T.name] || (this.mapping[T.name] = []);
    handlers.push(handler);
  }
  publish<T>(msg: T){
    var handlers = this.mapping[msg.constructor.name] || (this.mapping[msg.constructor.name] = []);
    handlers.forEach(item => item(msg));
  }
}
