import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/pages/home/home.component';
import { WatchVideoComponent } from './components/pages/watch-video/watch-video.component';
import { InformationsComponent } from './components/pages/informations/informations.component';
import { CategoriesComponent } from './components/pages/categories/categories.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'watch/:id', component: WatchVideoComponent },
  { path: 'categories/:category', component: CategoriesComponent },
  { path: 'informations', component: InformationsComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingComponent {}
