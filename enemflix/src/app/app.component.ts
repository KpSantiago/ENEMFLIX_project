import { Component } from '@angular/core';
import { PlaylistService } from './services/playlist/playlist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(
    private ServicePlaylist: PlaylistService,
  ) {
    this.getPlayLists();
  }

  getPlayLists() {
    this.ServicePlaylist.getPlaylistsDescomplica().subscribe((data) => {
      const items = data.items;

      // console.log(items);
    });
    this.ServicePlaylist.getPlaylistsBrasilEscola().subscribe((data) => {
      const items = data.items;

      // console.log(items);
    });
    this.ServicePlaylist.getPlaylistsStoodi().subscribe((data) => {
      const items = data.items;

      // console.log(items);
    });
  }


}
