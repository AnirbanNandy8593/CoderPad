import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'' , loadChildren: ()=> import('./test-management/test-management.module').then(m => m.TestManagementModule)
  },
  // {
  //   path:'' , loadChildren: ()=> import('./login/login.module').then(m => m.LoginModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
