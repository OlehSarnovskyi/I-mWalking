import {NgModule} from '@angular/core';
import {CreatePostPageComponent} from "./create-post-page.component";
import {NgxsFormPluginModule} from "@ngxs/form-plugin";
import {NgxsModule} from "@ngxs/store";
import {CreatePostState} from "./store";
import {CreatePostService} from "./services";
import {CreatePostFormComponent} from './components';
import {CreatePostRoutingModule} from "./create-post-routing.module";


@NgModule({
  declarations: [
    CreatePostPageComponent,
    CreatePostFormComponent,
  ],
  imports: [
    NgxsModule.forFeature([CreatePostState]),
    NgxsFormPluginModule,
    CreatePostRoutingModule
  ],
  providers: [CreatePostService]
})
export class CreatePostModule {}
