import {NgModule} from '@angular/core';
import {CreatePostPageComponent} from "./create-post-page.component";
import {NgxsFormPluginModule} from "@ngxs/form-plugin";
import {NgxsModule} from "@ngxs/store";
import {CreatePostState} from "./store";
import {CreatePostService} from "./services";
import {CreatePostFormComponent} from './components';
import {CreatePostRoutingModule} from "./create-post-routing.module";
import {QuillModule} from "ngx-quill";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {CommonModule} from "@angular/common";
import {MatOptionModule} from "@angular/material/core";


@NgModule({
  declarations: [
    CreatePostPageComponent,
    CreatePostFormComponent,
  ],
  imports: [
    CreatePostRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    NgxsModule.forFeature([CreatePostState]),
    NgxsFormPluginModule,
    QuillModule.forRoot(),
  ],
  providers: [CreatePostService]
})
export class CreatePostModule {}
