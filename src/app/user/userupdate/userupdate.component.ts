import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Contactdetails } from '../../services/contactdetails';
import { Userdetails } from '../../services/userdetails';
import { Httpprovider } from '../../services/httpprovider';

@Component({
  /*providers:[Contactdetails], */
  selector: 'app-userupdate',
  templateUrl: './userupdate.component.html',
  styleUrls: ['./userupdate.component.css']
})
export class UserupdateComponent implements OnInit {

  contact: any;
  submitted: boolean = false;
  setValues(contactList: any, id: any) {
     this.contact = contactList[id];
 }

  constructor(private route: ActivatedRoute, private location: Location,
              private _contactdetails: Contactdetails, private _userdetails: Userdetails,
              private _httpprovider: Httpprovider) { }


  ngOnInit() {
    var id = this.route.snapshot.paramMap.get('id');
    var contactList = this._contactdetails.getContactList();
    console.log(contactList[0].ctc_name);
    this.setValues(contactList, id);
  }

  onSubmit(){
    this._httpprovider.httpReq('http://127.0.0.1:9001/updatecontact', 'POST',
       {username: this._userdetails.hasUsername(), contact: this.contact }, null)
      .subscribe((data) => {
        /*this._contactdetails.setDetails(data);*/
        /*this.contactList = this._contactdetails.getContactList();*/
        console.log(this.contact);
        this.submitted = true;
     });
   }

}
