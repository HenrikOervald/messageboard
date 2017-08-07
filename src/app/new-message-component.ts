import { Component,Output, EventEmitter } from "@angular/core"
import { WebService } from './web.service';


import { MessagesComponent } from './messages-component';

@Component({
    selector: 'new-message',
    template: `
           
                <form (ngSubmit)="submitForm(owner,text)" style="width:40rem;">
                    <div class="form-group">
                        <input type="text" class="form-control" id="owner" [(ngModel)] ='message.owner' [ngModelOptions]="{standalone: true}"  placeholder="Owner" required>
                    </div>
 
                    <div class="form-group">
                        <input type="text" class="form-control" id="text" [(ngModel)]='message.text' [ngModelOptions]="{standalone: true}"  placeholder="Text" required>
                    </div>
 
                    <button type="submit" class="btn btn-success">Submit</button>
                </form>
            
                `

})
export class NewMessageComponent {

    constructor(private webService: WebService) {
       
    }
    message = {
    owner :"",
    text : ""
    }
    
    submitForm() {
       
        this.webService.postMessage(this.message);
    }

}