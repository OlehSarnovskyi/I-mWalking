import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxsModule} from "@ngxs/store";
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";
import {NgxsFormPluginModule} from "@ngxs/form-plugin";
import {LanguageTranslationModule, TOKEN_NAME} from "@modules";
import {HttpClientModule} from "@angular/common/http";
import {environment} from "../environments/environment";
import {LoggedInGuard, NotLoggedInGuard} from "./guards";
import {LoginService, LoginState} from "./layouts";
import {JwtModule} from "@auth0/angular-jwt";
import {SnackBarErrorsInterceptorModule} from "snack-bar-errors-interceptor";
import {SnackBarMessageInterceptorModule} from "../../../../libs/snack-bar-message-interceptor/src/lib/snack-bar-message-interceptor.module";

const STATES = [
  LoginState
];

const NGXS_MODULES = [
  NgxsModule.forRoot([...STATES], { developmentMode: !environment.production }),
  NgxsReduxDevtoolsPluginModule.forRoot(),
  NgxsFormPluginModule.forRoot(),
]

const SERVICES = [
  LoginService
]

const GUARDS = [
  LoggedInGuard,
  NotLoggedInGuard
]


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LanguageTranslationModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem(TOKEN_NAME)
        }
      }
    }),
    ...NGXS_MODULES,
    // TODO 24.07 SnackBarMessageInterceptorModule
    // SnackBarErrorsInterceptorModule,
    SnackBarMessageInterceptorModule
  ],
  providers: [
    ...SERVICES,
    ...GUARDS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
