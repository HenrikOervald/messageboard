import { Component } from "@angular/core"
import { WebService } from './web.service';

@Component({
    selector: 'new-message',
    template: `
                What up
                `

})
export class NewMessageComponent {
  
    constructor(private webService:WebService){
    }

     
}