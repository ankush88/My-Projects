import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Contactdetails } from '../../services/contactdetails';
import { Userdetails } from '../../services/userdetails';
import { Httpprovider } from '../../services/httpprovider';

@Component({
  selector: 'app-createcontact',
  templateUrl: './createcontact.component.html',
  styleUrls: ['./createcontact.component.css']
})
export class CreatecontactComponent implements OnInit {

  submitted: boolean = false;
  contact: any;
  contactList: any = [];


  constructor(private _location: Location, private _contactdetails: Contactdetails,
              private _userdetails: Userdetails, private _httpprovider: Httpprovider) {
   }

  ngOnInit() {
  }

  onSubmit(value: any) {
      this._contactdetails.setContact(value);
      this.contact = this._contactdetails.getContact();
      console.log(this.contact);
      this._httpprovider.httpReq('http://127.0.0.1:9001/createcontact', 'POST',
         {username: this._userdetails.hasUsername(), contact: this.contact}, null)
        .subscribe((data) => {
          /*this._contactdetails.setDetails(data);
          this.contactList = this._contactdetails.getContactList(); */
          console.log(data);
          this.submitted = true;
       });

  }

}
