import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { MessagesComponent } from './messages-component';
import { NewMessageComponent } from './new-message-component';
import { NavbarComponent } from "./navbar.component";

import { WebService } from './web.service';


@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent, MessagesComponent, NewMessageComponent, NavbarComponent ],
  bootstrap:    [ AppComponent ],
  providers : [ WebService ]
})
export class AppModule { }
