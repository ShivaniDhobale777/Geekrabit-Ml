import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { X1LargeComponent } from './x1-large/x1-large.component';
import { ForEnterpriseComponent } from './for-enterprise/for-enterprise.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: "X1-Large",
    component: X1LargeComponent ,
  },
  {
    path: "enterprise",
    component: ForEnterpriseComponent ,
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
