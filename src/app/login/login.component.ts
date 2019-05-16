import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, DoCheck {

  authenticated: string = 'none';
  ngDoCheck() {
  }
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    console.log('this');
  }


}
