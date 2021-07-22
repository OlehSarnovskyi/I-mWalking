import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {PostsPageComponent} from "./posts-page.component";
import {PostsRoutingModule} from "./posts-routing.module";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";
import {PostsSearchFormComponent} from "./components";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {NgxsFormPluginModule} from "@ngxs/form-plugin";
import {NgxsModule} from "@ngxs/store";
import {PostsState} from "./store";
import {PostsService} from "./services";
import {PasteEventTrimmerModule} from "paste-event-trimmer";
import {LoggedLayoutModule} from "../../logged-layout.module";


@NgModule({
  declarations: [
    PostsPageComponent,
    PostsSearchFormComponent,
  ],
  imports: [
    NgxsModule.forFeature([PostsState]),
    NgxsFormPluginModule,
    CommonModule,
    PostsRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatOptionModule,
    PasteEventTrimmerModule,
    LoggedLayoutModule
  ],
  providers: [PostsService]
})
export class PostsModule { }
