import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Userdetails } from '../../services/userdetails';
import { Httpprovider } from '../../services/httpprovider';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  private message;
  private loggedin = false;
  constructor(private _userdetails: Userdetails, private _httpprovider: Httpprovider, private _router: Router) { }

  ngOnInit() {
  }

  onSubmit(admin: any, form: NgForm) {
    this._httpprovider.httpReq('http://127.0.0.1:9001/userlogin','POST',{username:admin.username, password:admin.pwd},null).subscribe((data)=>{
             console.log(data);
             this._userdetails.setDetails(data);
          if (this._userdetails.username != null || this._userdetails.username != undefined || this._userdetails.usertype != null || this._userdetails.usertype != undefined){
                console.log(data.username);
          //    if (vari._userdetails.usertypeDetails() === 'admin'){vari._router.navigate( ['/admin'] );}
                if (this._userdetails.usertypeDetails().toUpperCase() === 'ADMIN'){
                   this.loggedin = true;
                   console.log(data);
                   this._router.navigate( ['admin'] );
                } else {
                  this.loggedin = false;
                  this.message = "User not an Admin!"
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
