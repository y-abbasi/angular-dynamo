import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import {DragDropModule} from '@angular/cdk/drag-drop';
import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { ProductTypeComponent } from "./product-type/product-type.component";
import { TextFieldComponent } from "./components/text-field/text-field.component";
import { FieldLoaderComponent } from "./components/field-loader/field-loader.component";
import { DynamicComponentModule } from "ng-dynamic-component";
import { FormLoaderComponent } from "./components/form-loader/form-loader.component";
import { PropertyDesignerComponent } from "./components/property-designer/property-designer.component";
import { SchemaBuilderService } from "./services/schema-builder.service";
import { ComboFieldComponent } from "./components/combo-field/combo-field.component";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { EvaluatorService } from './services/evaluator.service';
import { FormDesignerComponent } from './components/form-designer/form-designer.component';
import { PanelBarModule, SplitterModule, TabStripModule } from "@progress/kendo-angular-layout";
import { FormControlComponent } from './components/form-control/form-control.component';
import { ContainerControlComponent } from "./components/container-control/container-control.component";
import { EventAggregatorService } from './services/event-aggregator.service';
import { CheckboxFieldComponent } from './components/checkbox-field/checkbox-field.component';
import { ComplexFieldComponent } from './components/complex-field/complex-field.component';
import { DialogsModule } from "@progress/kendo-angular-dialog";
var routes = [
  {
    path: "",
    component: ProductTypeComponent
  }
];
@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DragDropModule,
    DynamicComponentModule,
    InputsModule,
    FormsModule ,
    DropDownsModule,
    SplitterModule,
    TabStripModule,
    DialogsModule 
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductTypeComponent,
    TextFieldComponent,
    FieldLoaderComponent,
    FormLoaderComponent,
    PropertyDesignerComponent,
    ComboFieldComponent,
    FormDesignerComponent,
    FormControlComponent,
    ContainerControlComponent,
    CheckboxFieldComponent,
    CheckboxFieldComponent,
    ComplexFieldComponent
  ],
  bootstrap: [AppComponent],
  entryComponents: [TextFieldComponent, ComboFieldComponent, ContainerControlComponent, FormControlComponent, CheckboxFieldComponent, ComplexFieldComponent],
  providers: [SchemaBuilderService, EvaluatorService, EventAggregatorService]
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
