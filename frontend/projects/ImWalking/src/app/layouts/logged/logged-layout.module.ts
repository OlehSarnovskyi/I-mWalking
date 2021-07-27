import {NgModule} from '@angular/core';
import {LoggedLayoutRoutingModule} from './logged-layout-routing.module';
import {LoggedLayoutComponent} from "./logged-layout.component";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {TokenInterceptor} from "./interceptors";
import {LoggedHeaderComponent, PostsListComponent} from "./components";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import {CommonModule} from "@angular/common";
import {UnsavedFormGuard} from "./guards";
import {LoggedLayoutService} from "./services";
import {NgxsModule} from "@ngxs/store";
import {LoggedLayoutState} from "./store";


@NgModule({
  declarations: [
    LoggedLayoutComponent,
    LoggedHeaderComponent,
    PostsListComponent
  ],
  imports: [
    NgxsModule.forFeature([LoggedLayoutState]),
    LoggedLayoutRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    CommonModule
  ],
  providers: [
    UnsavedFormGuard,
    LoggedLayoutService,
    {provide: HTTP_INTERCEPTORS, multi: true, useClass: TokenInterceptor}
  ],
  exports: [
    PostsListComponent
  ]
})
export class LoggedLayoutModule { }
