import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Userdetails } from '../../services/userdetails';
import { Httpprovider } from '../../services/httpprovider';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent implements OnInit {

  user: any;
  id: any;
  name: string;
  findUser(userList, id){
     this.user = userList[id];
     this.name = this.user.username;
  }

  constructor(private route: ActivatedRoute, private location: Location,
              private _userdetails: Userdetails,private _httpprovider: Httpprovider,
              private _router: Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id')
    this.findUser(this._userdetails.getUsersList(), this.id);
  }

  action(value: any){
        if(value == "yes"){
           this._httpprovider.httpReq('http://127.0.0.1:9001/deleteuser', 'POST',
              {user: this.user}, null)
             .subscribe((data) => {
              console.log(data);
              /*this._contactdetails.resetDetails();
              this._contactdetails.setDetails(data);
              this.contactList = this._contactdetails.getContactList(); */
              this._router.navigate( ['admin'] );
          });
        }
        else if(value == 'no') {
             this.location.back();
        }
   }

}
