import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CrudPostPageComponent} from "./crud-post-page.component";

const routes: Routes = [
  {path: '', component: CrudPostPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudPostRoutingModule {}
