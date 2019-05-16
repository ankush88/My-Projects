import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Userdetails } from '../../services/userdetails';
import { Httpprovider } from '../../services/httpprovider';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  submitted: boolean = false;
  user: any = {};

  constructor(private _location: Location, private _userdetails: Userdetails,
              private _httpprovider: Httpprovider) { }

  ngOnInit() {
  }

  onSubmit(value: any) {
      this._httpprovider.httpReq('http://127.0.0.1:9001/createuser', 'POST',
         {username: value.name, password: value.password, usertype: value.userrole}, null)
        .subscribe((data) => {
          /*this._contactdetails.setDetails(data);
          this.contactList = this._contactdetails.getContactList(); */
          console.log(data);
          this.submitted = true;
       });

  }
}
