import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { UserComponent } from './user/user.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { UserloginComponent } from './user/userlogin/userlogin.component';
import { UserviewComponent } from './user/userview/userview.component';
import { CreatecontactComponent } from './user/createcontact/createcontact.component';
import { UserupdateComponent } from './user/userupdate/userupdate.component';
import { UserdeleteComponent } from './user/userdelete/userdelete.component';
import { AdminviewComponent } from './admin/adminview/adminview.component';
import { CreateuserComponent } from './admin/createuser/createuser.component';
import { UpdateuserComponent } from './admin/updateuser/updateuser.component';
import { DeleteuserComponent } from './admin/deleteuser/deleteuser.component';


import { RouterModule, Routes} from '@angular/router';

const userRoutes: Routes = [
    { path: 'login' , component: LoginComponent},
    { path: 'userlogin' ,  component: UserloginComponent},
    { path: 'adminlogin' , component: AdminloginComponent},
    { path: 'register'   , component: RegisteruserComponent},
    { path: 'user',  component: UserComponent, children: [
       {path: '' ,          component: UserviewComponent},
       {path: 'view',       component: UserviewComponent},
       {path: 'create',     component: CreatecontactComponent},
       {path: 'update/:id', component: UserupdateComponent},
       {path: 'delete/:id', component: UserdeleteComponent}
    ]},
    { path: 'admin' , component: AdminComponent, children: [
       {path: '' ,          component: AdminviewComponent},
       {path: 'view',       component: AdminviewComponent},
       {path: 'create',     component: CreateuserComponent},
       {path: 'update/:id', component: UpdateuserComponent},
       {path: 'delete/:id', component: DeleteuserComponent}
    ]},
];

@NgModule({
  imports: [ RouterModule.forRoot(userRoutes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
