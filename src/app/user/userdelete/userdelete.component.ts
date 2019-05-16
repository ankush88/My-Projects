import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Contactdetails } from '../../services/contactdetails';
import { Userdetails } from '../../services/userdetails';
import { Httpprovider } from '../../services/httpprovider';

@Component({
  /* providers:[Contac],*/
  selector: 'app-userdelete',
  templateUrl: './userdelete.component.html',
  styleUrls: ['./userdelete.component.css']
})
export class UserdeleteComponent implements OnInit {

  contactList: any = [];
  id: number = null;
  ctcName: string = null

  constructor(private route: ActivatedRoute, private location: Location,
              private _contactdetails: Contactdetails, private _userdetails: Userdetails,
              private _httpprovider: Httpprovider, private _router: Router) { }

  ngOnInit() {
      this.id = +this.route.snapshot.paramMap.get('id');
      this.contactList = this._contactdetails.getContactList();
      this.ctcName = this.contactList[this.id].ctc_name;
  }

  action(value: any){
        if(value == "yes"){
           this._httpprovider.httpReq('http://127.0.0.1:9001/deletecontact', 'POST',
              {username: this._userdetails.hasUsername(), id: this.id}, null)
             .subscribe((data) => {
              console.log(data);
              this._contactdetails.resetDetails();
            /*  this._contactdetails.setDetails(data);
              this.contactList = this._contactdetails.getContactList(); */
              this._router.navigate( ['user'] );
          });
        }
        else if(value == 'no') {
             this.location.back();
        }
   }
}
