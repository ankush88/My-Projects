import {Injectable} from '@angular/core';
import {Userdetails} from './userdetails';

export interface contactdetails{
    ctc_name: string;
    ctc_phone: number;
    ctc_address: {
        apt_no: string;
        street_add: string;
        zip_code: number;
    };
  };
//    approved: string;
@Injectable()
export class Contactdetails implements contactdetails{
    public ctc_name: string = null;
    public ctc_phone: number = null;
    public ctc_address: any = null;
    public  contact: contactdetails = {
      ctc_name: null,
      ctc_phone: null,
      ctc_address: {
          apt_no: null,
          street_add: null,
          zip_code: null
      }
    };

    public contactList: contactdetails[] = [];
  //  public  approved: string = null;
    constructor(private userdetails: Userdetails){}

    setContact(value: any) {
         this.contact.ctc_name = value.name;
         console.log(value);
         console.log(this.contact.ctc_name);
         this.contact.ctc_phone = value.phone;
         this.contact.ctc_address.apt_no = value.aptno;
         this.contact.ctc_address.street_add = value.street;
         this.contact.ctc_address.zip_code = value.zip;
    }

    getContact(): any {
        console.log(this.contact);
        return this.contact;
    }

    getContactList(){
        console.log('contact details' + this.contactList);
        return this.contactList;
    }

    resetDetails(){
       this.contactList.length=0;
       console.log(this.contactList);
    }
    setDetails(data: any){
       let j=0;
       for(let i=0; i<data[1].length; i++){
        if(data[1][i] !=null) {
          this.contactList[j] = data[1][i];
          j++
        }
       }
    }

}
