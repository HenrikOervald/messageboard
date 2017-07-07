import { Component } from '@angular/core';
import {MessagesComponent} from './messages-component'
import { NewMessageComponent } from './new-message-component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-app',
  template: `
           
            <messages></messages>
            <new-message></new-message>
            `,
})
export class AppComponent  {}
