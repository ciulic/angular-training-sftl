import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { InterpolationComponent } from './components/templates/components/interpolation/interpolation.component';
import { TemplateStatementsComponent } from './components/templates/components/template-statements/template-statements.component';
import { PipesComponent } from './components/templates/components/pipes/pipes.component';
import { PropertyBindingComponent } from './components/templates/components/property-binding/property-binding.component';
import { BindingsComponent } from './components/templates/components/bindings/bindings.component';
import { HomeComponent } from './components/home/home.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { ChildComponent } from './components/templates/components/child/child.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { BuiltInComponent } from './components/directives/components/built-in/built-in.component';
import { AttributeComponent } from './components/directives/components/attribute/attribute.component';
import { StructuralComponent } from './components/directives/components/structural/structural.component';
import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { LogService } from "./log.service";

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    InterpolationComponent,
    TemplateStatementsComponent,
    PipesComponent,
    PropertyBindingComponent,
    BindingsComponent,
    HomeComponent,
    TemplatesComponent,
    ChildComponent,
    DirectivesComponent,
    BuiltInComponent,
    AttributeComponent,
    StructuralComponent,
    HighlightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    NoopAnimationsModule,
    NgbModule,
    FormsModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
