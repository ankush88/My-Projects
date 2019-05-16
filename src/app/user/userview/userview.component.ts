import { Component, OnInit } from '@angular/core';
import { Userdetails } from '../../services/userdetails';
import { Contactdetails } from '../../services/contactdetails';
import { Httpprovider } from '../../services/httpprovider';

/*interface contact {
     ctc_name: string;
     ctc_phone: number;
     ctc_address: {
         apt_no: string;
         street_add: string;
         zip_code: number;
     };
} */
@Component({
  /*providers: [Contactdetails], */
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css']
})
export class UserviewComponent implements OnInit{

  public contactList: any = [];
  public viewset: boolean = false;
  constructor(private _httpprovider: Httpprovider, private _userdetails: Userdetails, private _contactdetails: Contactdetails) { }

  ngOnInit() {
    this._httpprovider.httpReq('http://127.0.0.1:9001/contacts', 'GET', {username: this._userdetails.hasUsername()}, null)
        .subscribe((data) => {
          console.log(data);
          this._contactdetails.setDetails(data);
          this.contactList = this._contactdetails.getContactList();
          this.viewset = true;
       });
  }
}
