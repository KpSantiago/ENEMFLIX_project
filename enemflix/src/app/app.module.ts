import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { WatchVideoComponent } from './components/pages/watch-video/watch-video.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, WatchVideoComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
