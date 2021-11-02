import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterpolationComponent } from "./components/templates/components/interpolation/interpolation.component";
import { TemplateStatementsComponent } from "./components/templates/components/template-statements/template-statements.component";
import { PipesComponent } from "./components/templates/components/pipes/pipes.component";
import { PropertyBindingComponent} from "./components/templates/components/property-binding/property-binding.component";
import { BindingsComponent } from "./components/templates/components/bindings/bindings.component";
import { HomeComponent } from "./components/home/home.component";
import {TemplatesComponent} from "./components/templates/templates.component";

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
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
