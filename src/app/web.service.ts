import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { Message } from './message';
 
@Injectable()
export class WebService{

    constructor(private http : Http){}
   
    getMessages(){
         return this.http.get("http://localhost:49917/api/messages").toPromise();
    }

  postMessage(message : Message){
        var mes :JSON  = JSON.parse(JSON.stringify(message));
        console.log(mes);
        this.http.post("http://localhost:49917/api/messages", mes ).toPromise();
    }
};