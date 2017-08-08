import { Component, ViewChild } from '@angular/core';
import {MessagesComponent} from './messages-component'
import { NewMessageComponent } from './new-message-component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-app',
  template: `
           <navbar></navbar>
           <div class="container">
            <messages></messages>
            <new-message></new-message>
            </div>
            `,
})
export class AppComponent  {


}
