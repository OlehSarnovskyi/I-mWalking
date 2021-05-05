import { NgModule } from '@angular/core';

import { MapRoutingModule } from './map-routing.module';
import {MapPageComponent} from "./map-page.component";


@NgModule({
  declarations: [MapPageComponent],
  imports: [
    MapRoutingModule
  ]
})
export class MapModule { }
