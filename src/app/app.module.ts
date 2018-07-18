import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { environment } from '../environments/environment.prod';

import { AppComponent } from './app.component';
import { ChatDialogComponent } from './chat/chat-dialog/chat-dialog.component';
import { ChatModule } from './chat/chat.module';
import { HomeComponent } from './home/home.component';
import { WebsiteComponent } from './website/website.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WebsiteComponent
  ],
  imports: [
    BrowserModule,
    ChatModule,
    RouterModule.forRoot([
      {
        path:'',
        component:HomeComponent
      },
      {
        path:'website',
        component:WebsiteComponent
      },
      {
        path:'chat',
        component:ChatDialogComponent
      }])
    
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
