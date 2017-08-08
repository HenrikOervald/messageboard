import { Component,Output, EventEmitter } from "@angular/core"
import { WebService } from './web.service';




@Component({
    selector: 'new-message',
    template: `
            <div class="new-message">
                <form (ngSubmit)="submitForm(owner,text)">
                    <div class="form-group form-group-owner">
                        <input type="text" class="form-control" id="owner" [(ngModel)] ='message.owner' [ngModelOptions]="{standalone: true}"  placeholder="Owner" required>
                    </div>
 
                    <div class="form-group">
                        <textarea rows="10" class="form-control" id="text" [(ngModel)]='message.text' [ngModelOptions]="{standalone: true}"  placeholder="Text" required></textarea>
                    </div>
 
                    <button type="submit" class="btn btn-success">Submit</button>
                </form>
            </div>
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