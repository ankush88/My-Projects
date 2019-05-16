import {Injectable} from '@angular/core';

export interface userdetails{
    userid: string;
    username: string;
    password: string;
    usertype: string;
//    approved: string;
//    loggedin: boolean
}
@Injectable()
export class Userdetails implements userdetails {
    public userid: string = null;
    public  username: string = null;
    public  password: string = null;
    public  usertype: string = null;
  //  public  approved: string = null;
    public  loggedin: boolean = false;

    usersList: userdetails[] = [];
    constructor(){}
    isLoggedin(){     return this.loggedin;      }
  //  isApproved(){   return this.approved;         }
    usertypeDetails(){   return this.usertype;     }
    hasUsername() {     return this.username;     }
    getUserdetails(){
        return {userid: this.userid, username: this.username, password: this.password, usertype: this.usertype, loggedin: this.loggedin};
    }
    resetDetails(){
        this.usersList.length = 0;
        this.username = null; this.password = null;
        this.usertype = null; //this.approved = null;
        this.loggedin = false; this.userid = null;
    }
    setDetails(data: any){
        this.userid = data[0];
        this.username = data[1]; this.password = data[2];
        this.usertype = data[3]; //this.approved = data.approved;
        this.loggedin = true;
    }

    getUsersList(){
        return this.usersList;
    }
    setUsersList(data: any) {
      this.resetDetails();
      for (var i=0;i<data.length;i++){
          if(data[i].usertype != 'admin'){
            this.usersList.push(data[i]);
          }
      }
    }
    returnArray(data: any){
        let iter = data.length;
        let variresArray= [];
            for (var i=0;i<iter;i++){
                variresArray.push(data[i].candidatename);
            }
            let a = variresArray.reduce(function (acc, curr) {
            if (typeof acc[curr] === 'undefined') {
            acc[curr] = 1;
            } else {
            acc[curr] += 1;
            }
            return acc;
            }, {});
        return a;
    }
}
