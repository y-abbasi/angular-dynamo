import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { ProductTypeComponent } from "./product-type/product-type.component";
import { TextFieldComponent } from './components/text-field/text-field.component';
import { FieldLoaderComponent } from './components/field-loader/field-loader.component';
import { DynamicComponentModule } from "ng-dynamic-component";
import { FormLoaderComponent } from './components/form-loader/form-loader.component';
import { PropertyDesignerComponent } from './components/property-designer/property-designer.component';
import { SchemaBuilderService } from './services/schema-builder.service';
var routes = [
  {
    path: "",
    component: ProductTypeComponent
  }
];
@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes), ReactiveFormsModule, DynamicComponentModule],
  declarations: [AppComponent, TopBarComponent, ProductTypeComponent, TextFieldComponent, FieldLoaderComponent, FormLoaderComponent, PropertyDesignerComponent],
  bootstrap: [AppComponent],
  entryComponents:[TextFieldComponent],
  providers: [SchemaBuilderService]
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
