import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { WatchVideoComponent } from './components/pages/watch-video/watch-video.component';
import { InformationsComponent } from './components/pages/informations/informations.component';
import { AppRoutingComponent } from './app-routing.module';
import { CategoriesComponent } from './components/pages/categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WatchVideoComponent,
    InformationsComponent,
    CategoriesComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
