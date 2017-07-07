import { Component } from "@angular/core"
import { WebService } from './web.service';

import { Message } from './message';

@Component({
    selector: 'new-message',
    template: `
           
                <form (ngSubmit)="submitForm(owner,text)" style="width:40rem;">
                    <div class="form-group">
                        <input type="text" class="form-control" id="owner" [(ngModel)] ='newOwner' [ngModelOptions]="{standalone: true}"  placeholder="Owner" required>
                    </div>
 
                    <div class="form-group">
                        <input type="text" class="form-control" id="text" [(ngModel)]='newText' [ngModelOptions]="{standalone: true}"  placeholder="Text" required>
                    </div>
 
                    <button type="submit" class="btn btn-success">Submit</button>
                </form>
            
                `

})
export class NewMessageComponent {

    constructor(private webService: WebService) {
       
    }

     newOwner : string = "Name";
     newText : string ="Text";

    submitForm() {
        let message = new Message(this.newOwner, this.newText);
        this.webService.postMessage(message);
    }

}