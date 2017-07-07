import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
 
@Injectable()
export class WebService{

    constructor(private http : Http){}
   
    getMessages(){
         return this.http.get("http://localhost:49917/api/messages").toPromise();
    }
};