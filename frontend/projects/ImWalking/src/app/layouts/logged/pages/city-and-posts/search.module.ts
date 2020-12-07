import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {SearchPageComponent} from "./search-page.component";
import {SearchRoutingModule} from "./search-routing.module";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [SearchPageComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
  ]
})
export class SearchModule { }
