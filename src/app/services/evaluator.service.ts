import { Injectable } from "@angular/core";

@Injectable()
export class EvaluatorService {
  constructor() {}
  eval(model, expression) {
    var fields = [];
    var regex = /[^\s\+-\/\=]+/g; // This is "multiple not space characters, which should be searched not once in string"

    var match = expression.match(regex);
    for (var i = 0; i<match.length; i++)
    {
        fields.push(match[i].replace(/[\(\)\']/g, ''));
    }
    //for(var p in model) fields.push(p);
    var exp = `((model) => { var { ${fields.join(',')} } = model; return ${expression}; })(model)`;
    return eval(exp);
  }
}
