import { Component } from '@angular/core';
import { PlaylistService } from './services/playlist/playlist.service';
import { CategoriesService } from './services/categories/categories.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  category: string = 'portugues';

  constructor(
    private ServicePlaylist: PlaylistService,
    private ServiceCategories: CategoriesService
  ) {
    this.getPlayLists();
    this.getCategories();
  }

  getPlayLists() {
    this.ServicePlaylist.getPlaylistsDescomplica().subscribe((data) => {
      const items = data.items;

      console.log(items);
    });
    this.ServicePlaylist.getPlaylistsBrasilEscola().subscribe((data) => {
      const items = data.items;

      console.log(items);
    });
    this.ServicePlaylist.getPlaylistsStoodi().subscribe((data) => {
      const items = data.items;

      console.log(items);
    });
  }

  getCategories() {
    this.ServiceCategories.getVideosCategories(this.category).subscribe(
      (data) => {
        const items = data.items;

        console.log(items);
      }
    );
  }
}
