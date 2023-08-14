import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { WatchVideoComponent } from './components/pages/watch-video/watch-video.component';
import { InformationsComponent } from './components/pages/informations/informations.component';
import { AppRoutingComponent } from './app-routing.module';
import { CategoriesComponent } from './components/pages/categories/categories.component';
import { SearchPageComponent } from './components/pages/search-page/search-page.component';
import { SearchComponent } from './components/layout/search/search.component';
import { SideHeaderComponent } from './components/layout/side-header/side-header.component';
import { TopHeaderComponent } from './components/layout/top-header/top-header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CategoriesMenuComponent } from './components/pages/categories-menu/categories-menu.component';
import { SlideComponent } from './components/layout/slide/slide.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WatchVideoComponent,
    InformationsComponent,
    CategoriesComponent,
    SearchPageComponent,
    SearchComponent,
    SideHeaderComponent,
    TopHeaderComponent,
    CategoriesMenuComponent,
    SlideComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingComponent,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
