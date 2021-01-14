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


@NgModule({
  declarations: [
    CreatePostPageComponent,
    CreatePostFormComponent,
  ],
  imports: [
    CreatePostRoutingModule,
    ReactiveFormsModule,
    NgxsModule.forFeature([CreatePostState]),
    NgxsFormPluginModule,
    QuillModule.forRoot(),
    MatButtonModule,
  ],
  providers: [CreatePostService]
})
export class CreatePostModule {}
