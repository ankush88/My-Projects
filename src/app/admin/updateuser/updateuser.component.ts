import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Userdetails } from '../../services/userdetails';
import { Httpprovider } from '../../services/httpprovider';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  user: any;
  submitted: boolean = false;
  setValues(usersList: any, id: any) {
     this.user = usersList[id];
 }

  constructor(private route: ActivatedRoute, private location: Location,
              private _userdetails: Userdetails, private _httpprovider: Httpprovider) { }

  ngOnInit() {
    var id = this.route.snapshot.paramMap.get('id');
    var usersList = this._userdetails.getUsersList();
    console.log(usersList[0].username);
    this.setValues(usersList, id);
  }

  onSubmit(){
    this._httpprovider.httpReq('http://127.0.0.1:9001/updateuser', 'POST',
       { user: this.user }, null)
      .subscribe((data) => {
        /*this._contactdetails.setDetails(data);*/
        /*this.contactList = this._contactdetails.getContactList();*/
        console.log(data);
        this.submitted = true;
     });
   }

}
