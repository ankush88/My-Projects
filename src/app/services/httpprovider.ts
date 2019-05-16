import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { HttpClient, HttpResponse, HttpRequest, HttpHeaders, HttpParams } from '@angular/common/http';
//import {Http, Response, Request, RequestMethod, Headers} from '@angular/http';
import * as _ from 'lodash';
//import 'rxjs/Rx';

@Injectable()
export class Httpprovider {
  //  cities: HttpResponse;
    http: HttpClient;

    constructor(http: HttpClient){
        this.http = http;
    }
    httpReq(url: string, method: string, data: any, header: Headers){
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        //console.log(headers);
        var parm: HttpParams = null;
        var senddata: any;
        if (method === 'GET') {
             var senddata = null;
             if (data != null){
                parm = new HttpParams().
                       set('username', data.username);
            }
              else parm= null;             
        }
        if (method === 'POST') {
            var senddata = data;
            parm = null;
        }




        // Get polyfill for IE from here
        // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
        /*if(header !== undefined || header !== null){
            Object.keys(header).forEach(function(key) {
                headers.append(key , header[key]);
            });
        }*/

      /*  if (method === 'GET'){ var methods = Httpc.Get}
        else if (method === 'POST'){ var methods = HttpRequestMethod.Post}
        else if (method === 'PUT'){var methods = HttpRequestMethod.Put}
        else if (method === 'PATCH'){var methods = HttpRequestMethod.Patch}
        else if (method === 'DELETE'){var methods = HttpRequestMethod.Delete}
        else {methods = HttpRequestMethod.Get};
       */
        return this.http.request(
                    method,
                    url,
                    {
                      body: senddata,
                      headers: headers,
                      params: parm
                    }
                )
                .map(res => _.values(res));
    }

}
