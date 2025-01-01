import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { AdminApprovalComponent } from './components/admin-approval/admin-approval.component';


const routes: Routes = [
  // { path: 'login', component: LoginComponent },
  // { path: 'signup', component: SignupComponent },
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path:'profile',component:ProfileComponent },
  {
    path:'admin-approval',component:AdminApprovalComponent
  },
  {
    path:'',redirectTo:'admin-approval',pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule { }
