import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Userdetails } from '../../services/userdetails';
import { Httpprovider } from '../../services/httpprovider';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  form: string;
  loggedin: boolean =  false;
  message: string;
  constructor(private _userdetails: Userdetails, private _httpprovider: Httpprovider, private _router: Router) { }

  ngOnInit() {
    this.form = "user";
    console.log('user login');
  }

  ngAfterViewInit(){
    //  const element = this.renderer.selectRootElement('div');
    //  this.renderer.removeChild(element, this.el.nativeElement.Login);
  }

  setForm() {
      this.form = "register";
  }

  onSubmit(user: any,form: NgForm){
    this._httpprovider.httpReq('http://127.0.0.1:9001/userlogin','POST',{username:user.username, password:user.pwd},null).subscribe((data)=>{
             console.log(data);
             this._userdetails.setDetails(data);
          if (this._userdetails.username != null || this._userdetails.username != undefined || this._userdetails.usertype != null || this._userdetails.usertype != undefined){
                console.log(data.username);
          //    if (vari._userdetails.usertypeDetails() === 'admin'){vari._router.navigate( ['/admin'] );}
                if (this._userdetails.usertypeDetails().toUpperCase() === 'USER'){
                   this.loggedin = true;
                   console.log(data);
                   this._router.navigate( ['user'] );
                } else{
                  this.loggedin = false;
                  this.message = "Not an user!"
                  form.reset();
                }
          } else {
            this.loggedin = false;
            this.message = "Username or Password not found!"
            form.reset();
          }
        },
           (error) => { console.log('Error from backend API', + error)}
        );

  }
}
