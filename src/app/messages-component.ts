import { Component } from "@angular/core"
import { WebService } from './web.service';

@Component({
    selector: 'messages',
    template: `
                <h1 *ngIf="activeName != '' ">Message by : {{activeName}}</h1>
                <div class="list-group" style="width: 40rem;">
                    <div *ngFor="let message of webService.messages">
                    <div class="message">
                         <a (click)="setActive(message.owner)" href="#" class="list-group-item">
                         
                         <div class="message-header">
                         <h4><i class="glyphicon glyphicon-plus"></i>   {{message.owner}} <span class="badge">{{webService.messages.length}}</span></h4>
                         </div>
                         <div class="message-body">
                          <p>{{message.text}}</p>
                          </div>
                         </a>
                    </div>
                    </div>
                </div>
                `

})
export class MessagesComponent {
    activeName = "";
   
    constructor(private webService:WebService){
        /**Webservice needed for binding messages array from data storage in web.service.ts */
    }

  

    setActive(activeName : string){
        this.activeName = activeName;
        console.log(this.activeName);
    }
    
     
}
