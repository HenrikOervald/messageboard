import { Component } from "@angular/core"
import { WebService } from './web.service';

@Component({
    selector: 'messages',
    template: `
                <h1 *ngIf="activeName != '' ">Message by : {{activeName}}</h1>
                <div class="list-group" style="width: 40rem;">
                    <div *ngFor="let message of messages">
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
     messages : Array<any> = [];
    constructor(private webService:WebService){
    }

    async ngOnInit(){
       var response = await this.webService.getMessages();
       this.messages = (response.json());
    }

    setActive(activeName : string){
        this.activeName = activeName;
        console.log(this.activeName);
    }
    
     
}
