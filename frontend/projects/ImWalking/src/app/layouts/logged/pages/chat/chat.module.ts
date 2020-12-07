import { NgModule } from '@angular/core';

import { ChatRoutingModule } from './chat-routing.module';
import {ChatPageComponent} from "./chat-page.component";


@NgModule({
  declarations: [ChatPageComponent],
  imports: [
    ChatRoutingModule
  ]
})
export class ChatModule { }
