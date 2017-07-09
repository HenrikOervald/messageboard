import { Component } from "@angular/core"
import { WebService } from './web.service';

@Component({
    selector: 'messages',
    template: `
                <h1 *ngIf="activeName != '' ">Message by : {{activeName}}</h1>
                <div class="list-group" style="width: 40rem;">
                    <div *ngFor="let message of webService.messages">
                         <a (click)="setActive(message.owner)" href="#" class="list-group-item">
                         <div class="message-header">
                         <h4>{{message.owner}}</h4>
                         </div>
                          <p>{{message.text}}</p>
                         </a>
                    </div>
                </div>
                `

})
export class MessagesComponent {
    activeName = "";
   
    constructor(private webService:WebService){
        
    }

  

    setActive(activeName : string){
        this.activeName = activeName;
        console.log(this.activeName);
    }
    
     
}
