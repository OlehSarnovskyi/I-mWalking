import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChooseCityPageComponent} from "./choose-city-page.component";

const routes: Routes = [
  {path: '', component: ChooseCityPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChooseCityRoutingModule { }
