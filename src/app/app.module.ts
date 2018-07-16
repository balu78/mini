import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { environment } from '../environments/environment.prod';

import { AppComponent } from './app.component';
import { ChatDialogComponent } from './chat/chat-dialog/chat-dialog.component';
import { ChatModule } from './chat/chat.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ParticlesModule } from 'angular-particle';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ParticlesModule,
    ChatModule,
    RouterModule.forRoot([
      {
        path:'',
        component:HomeComponent
      },
      {
        path:'chatbot',
        component:ChatDialogComponent
      }])
    
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
