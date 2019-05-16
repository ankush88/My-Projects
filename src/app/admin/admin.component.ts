import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(value: any){
    console.log(value);
    if (value.userId != "" && value.pwd!="") {
      console.log('Admin logged in');
    //  this.router.navigate(['/user/view']);
    }
  }
}
