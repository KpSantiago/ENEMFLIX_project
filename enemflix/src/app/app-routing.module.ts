import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/pages/home/home.component';
import { InformationsComponent } from './components/pages/informations/informations.component';
import { CategoriesComponent } from './components/pages/categories/categories.component';
import { SearchPageComponent } from './components/pages/search-page/search-page.component';
import { WatchVideoComponent } from './components/pages/watch-video/watch-video.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'watch/:i', component: WatchVideoComponent },
  { path: 'category/:c', component: CategoriesComponent },
  { path: 'search/:q', component: SearchPageComponent },
  { path: 'informations', component: InformationsComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingComponent {}
