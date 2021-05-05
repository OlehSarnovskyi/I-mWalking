import { NgModule } from '@angular/core';

import { MapRoutingModule } from './map-routing.module';
import {MapPageComponent} from "./map-page.component";
import {LeafletModule} from "@asymmetrik/ngx-leaflet";


@NgModule({
  declarations: [MapPageComponent],
  imports: [
    MapRoutingModule,
    LeafletModule
  ]
})
export class MapModule { }
