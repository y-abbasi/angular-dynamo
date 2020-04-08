import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { ProductTypeComponent } from "./product-type/product-type.component";
import { TextFieldComponent } from './components/text-field/text-field.component';
var routes = [
  {
    path: "",
    component: ProductTypeComponent
  }
];
@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes), ReactiveFormsModule],
  declarations: [AppComponent, TopBarComponent, ProductTypeComponent, TextFieldComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
