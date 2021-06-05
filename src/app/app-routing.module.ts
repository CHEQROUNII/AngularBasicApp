import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { PageOneComponent } from './page-one/page-one.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {path:"users", component: UserComponent},  {path:"admin", component: AdminComponent}
  ,  {path:"pageOne", component: PageOneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
