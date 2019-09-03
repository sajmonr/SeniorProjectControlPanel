import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { TvComponent } from './home/tv/tv.component';
import { TemperatureComponent } from './home/temperature/temperature.component';
import { LightsComponent } from './home/lights/lights.component';
import { AudioComponent } from './home/audio/audio.component';
import { EndMeetingComponent } from './home/end-meeting/end-meeting.component';
import { TopbarComponent } from './topbar/topbar.component';
import { BottombarComponent } from './bottombar/bottombar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TvComponent,
    TemperatureComponent,
    LightsComponent,
    AudioComponent,
    EndMeetingComponent,
    TopbarComponent,
    BottombarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
