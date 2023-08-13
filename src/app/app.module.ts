import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { LoginComponent } from './pages/login/login.component';
import { CommunityComponent } from './pages/community/community.component';
import { CommunityGroupItemComponent } from './components/communityComponents/community-group-item/community-group-item.component';
import { MessageHistoryComponent } from './components/communityComponents/message-history/message-history.component';
import { MessageInputComponent } from './components/communityComponents/message-input/message-input.component';
import { SideBarItemComponent } from './components/sideBarComponents/side-bar-item/side-bar-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    LoginComponent,
    CommunityComponent,
    CommunityGroupItemComponent,
    MessageHistoryComponent,
    MessageInputComponent,
    SideBarItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
