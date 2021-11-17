import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './topics/data-binding/data-binding.component';
import { AttributeBindingComponent } from './topics/data-binding/attribute-binding/attribute-binding.component';
import { PropertyBindingComponent } from './topics/data-binding/property-binding/property-binding.component';
import { EventBindingComponent } from './topics/data-binding/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './topics/data-binding/two-way-binding/two-way-binding.component';
import { InterpolationComponent } from './topics/data-binding/interpolation/interpolation.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    AttributeBindingComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    InterpolationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
