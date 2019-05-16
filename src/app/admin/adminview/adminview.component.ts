import { Component, OnInit } from '@angular/core';
import { Userdetails } from '../../services/userdetails';
import { Httpprovider } from '../../services/httpprovider';

@Component({
  selector: 'app-adminview',
  templateUrl: './adminview.component.html',
  styleUrls: ['./adminview.component.css']
})
export class AdminviewComponent implements OnInit {

  usersList: any = [];
  constructor(private _httpprovider: Httpprovider, private _userdetails: Userdetails) { }

  ngOnInit() {
    this._httpprovider.httpReq('http://127.0.0.1:9001/users', 'GET', null, null)
        .subscribe((data) => {
          console.log(data);
          this._userdetails.setUsersList(data);
          this.usersList = this._userdetails.getUsersList();
    });
  }

}
