import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsfutureComponent } from './projectsfuture.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsfutureComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsfutureComponentRoutingModule {}
