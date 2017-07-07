import { Component } from "@angular/core"
import { WebService } from './web.service';

import { Message } from './message';

@Component({
    selector: 'new-message',
    template: `
            <div class="container">
                <form (ngSubmit)="submitForm(owner,text)">
                    <div class="form-group">
                        <input type="text" class="form-control" id="owner" [(ngModel)] ='newOwner'  placeholder="Owner" required>
                    </div>
 
                    <div class="form-group">
                        <input type="text" class="form-control" id="text" [(ngModel)]='newText'  placeholder="Text" requierd>
                    </div>
 
                    <button type="submit" class="btn btn-success">Submit</button>
                </form>
            </div>
                `

})
export class NewMessageComponent {

    constructor(private webService: WebService) {
       
    }

     newOwner : string = "test";
     newText : string ="test";

    submitForm() {
        let message = new Message(this.newOwner, this.newText);
        this.webService.postMessage(message);
    }

}