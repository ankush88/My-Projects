import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Userdetails } from './services/userdetails';
import { Httpprovider } from './services/httpprovider';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { CreatecontactComponent } from './user/createcontact/createcontact.component';
import { UserviewComponent } from './user/userview/userview.component';
import { UserdeleteComponent } from './user/userdelete/userdelete.component';
import { UserupdateComponent } from './user/userupdate/userupdate.component';

import { AppRoutingModule } from './app-routing.module';
import { UserloginComponent } from './user/userlogin/userlogin.component';
import { LoginComponent } from './login/login.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminviewComponent } from './admin/adminview/adminview.component';
import { CreateuserComponent } from './admin/createuser/createuser.component';
import { UpdateuserComponent } from './admin/updateuser/updateuser.component';
import { DeleteuserComponent } from './admin/deleteuser/deleteuser.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    UserviewComponent,
    UserdeleteComponent,
    UserupdateComponent,
    UserloginComponent,
    LoginComponent,
    AdminloginComponent,
    AdminviewComponent,
    CreatecontactComponent,
    CreateuserComponent,
    UpdateuserComponent,
    DeleteuserComponent,
    RegisteruserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [Userdetails,  Httpprovider],
  bootstrap: [AppComponent]
})
export class AppModule { }
