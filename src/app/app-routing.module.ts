import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {TvComponent} from './home/tv/tv.component';
import {TemperatureComponent} from './home/temperature/temperature.component';
import {LightsComponent} from './home/lights/lights.component';
import {AudioComponent} from './home/audio/audio.component';
import {EndMeetingComponent} from './home/end-meeting/end-meeting.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'tv', component: TvComponent},
  {path: 'temperature', component: TemperatureComponent},
  {path: 'lights', component: LightsComponent},
  {path: 'audio', component: AudioComponent},
  {path: 'end-meeting', component: EndMeetingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
