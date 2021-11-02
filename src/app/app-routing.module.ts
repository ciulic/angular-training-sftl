import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterpolationComponent } from "./components/templates/components/interpolation/interpolation.component";
import { TemplateStatementsComponent } from "./components/templates/components/template-statements/template-statements.component";
import { PipesComponent } from "./components/templates/components/pipes/pipes.component";
import { PropertyBindingComponent} from "./components/templates/components/property-binding/property-binding.component";
import { BindingsComponent } from "./components/templates/components/bindings/bindings.component";
import { HomeComponent } from "./components/home/home.component";
import {TemplatesComponent} from "./components/templates/templates.component";
import {DirectivesComponent} from "./components/directives/directives.component";
import {BuiltInComponent} from "./components/directives/components/built-in/built-in.component";
import {AttributeComponent} from "./components/directives/components/attribute/attribute.component";
import {StructuralComponent} from "./components/directives/components/structural/structural.component";

const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'templates',
  component: TemplatesComponent,
  children: [{
    path: 'interpolation',
    component: InterpolationComponent
  }, {
    path: 'templates-statements',
    component: TemplateStatementsComponent
  }, {
    path: 'pipes',
    component: PipesComponent
  }, {
    path: 'property-binding',
    component: PropertyBindingComponent
  }, {
    path: 'bindings',
    component: BindingsComponent
  }]
}, {
  path: 'directives',
  component: DirectivesComponent,
  children: [{
    path: 'built-in',
    component: BuiltInComponent
  }, {
    path: 'attribute',
    component: AttributeComponent
  }, {
    path: 'structural',
    component: StructuralComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
