import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Userdetails } from '../services/userdetails';
import { Httpprovider } from '../services/httpprovider';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {

  submitted: boolean = false;
  user: any = {};

  constructor(private _location: Location, private _userdetails: Userdetails,
              private _httpprovider: Httpprovider, private _router: Router) { }

  ngOnInit() {
  }

  onSubmit(value: any) {
      this._httpprovider.httpReq('http://127.0.0.1:9001/createuser', 'POST',
         {username: value.name, password: value.password, usertype: "User"}, null)
        .subscribe((data) => {
           this._router.navigate(['user']);
          /*this._contactdetails.setDetails(data);
          this.contactList = this._contactdetails.getContactList(); */
          console.log(data);
          this.submitted = true;
       });

  }
}
