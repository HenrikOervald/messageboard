import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class WebService {

    BASE_URL = 'http://localhost:49917/api';

    messages: any = [];

    constructor(private http: Http) {
        this.getMessages();
    }

    async getMessages() {
        try {
            var response = await this.http.get(this.BASE_URL + "/messages").toPromise();
            this.messages = response.json();
        } catch (error) {
            console.error("Unable to fetch data");
        }

    }

    async postMessage(message: any) {
        console.log(message);
        var response = await this.http.post(this.BASE_URL + "/messages", message).toPromise();
        this.messages.push(response.json());
    }
};