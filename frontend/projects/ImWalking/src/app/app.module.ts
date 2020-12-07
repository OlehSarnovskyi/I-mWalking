import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxsModule} from "@ngxs/store";
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";
import {NgxsFormPluginModule} from "@ngxs/form-plugin";

const STATES = [

];

const NGXS_MODULES = [
  NgxsModule.forRoot([...STATES]),
  NgxsReduxDevtoolsPluginModule.forRoot(),
  NgxsFormPluginModule.forRoot(),
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...NGXS_MODULES
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
