import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { MessagesComponent } from './messages-component';
import { NewMessageComponent } from './new-message-component';

import { WebService } from './web.service';


@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, MessagesComponent, NewMessageComponent ],
  bootstrap:    [ AppComponent ],
  providers : [ WebService ]
})
export class AppModule { }
