import { Component, OnInit, AfterViewInit, Renderer2, ElementRef, Input } from '@angular/core';
import { Httpprovider } from '../services/httpprovider';
import { Contactdetails } from '../services/contactdetails';
import { Userdetails } from '../services/userdetails';
import { Router } from '@angular/router';

@Component({
  providers: [Contactdetails],
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, AfterViewInit{

  @Input() authenticated;

  public contactList: any = [];
  constructor(private _userdetails: Userdetails, private _httpprovider: Httpprovider, private _router: Router,
              private _contactdetails: Contactdetails) { }

  ngOnInit() {
       /*this.contactList = this._contactdetails.getContactList(); */
  }

  ngAfterViewInit(){
    //  const element = this.renderer.selectRootElement('div');
    //  this.renderer.removeChild(element, this.el.nativeElement.Login);
  }

}
