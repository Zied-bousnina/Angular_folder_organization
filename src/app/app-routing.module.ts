import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';

const routes: Routes = [
  {path:'', component: FrontLayoutComponent},
  {path:'admin', component: AdminLayoutComponent, children:[
    {path:'dashboard', loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)},
    {path:'addstudent', loadChildren: () => import('./views/addstudent/addstudent.module').then(m => m.AddstudentModule)},
    {path:'addproduct', loadChildren: () => import('./views/addprodect/addprodect.module').then(m => m.AddprodectModule)},
    // {path:'addcourse', loadChildren: () => import('./views/addcourse/addcourse.module').then(m => m.AddcourseModule)},
  ]},
  {path:'user', component: UserLayoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
