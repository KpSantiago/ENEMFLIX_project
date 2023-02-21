import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categories } from 'src/app/interfaces/Categories';

import { PlaylistService } from 'src/app/services/playlist/playlist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  descomplica!: Categories[];
  brasilEscola!: Categories[];
  stoodi!: Categories[];

  constructor(
    private ServicePlaylist: PlaylistService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // DESCOMPLPICA
    this.ServicePlaylist.getVideosDescomplica().subscribe((data) => {
      const items = data.items;

      items.map((data) => {
        data.snippet.publishedAt = new Date(
          data.snippet.publishedAt
        ).toLocaleDateString();
      });

      this.descomplica = items;
    });
    // BRASIL ESCOLA
    this.ServicePlaylist.getVideosBrasilEscola().subscribe((data) => {
      const items = data.items;

      items.map((data) => {
        data.snippet.publishedAt = new Date(
          data.snippet.publishedAt
        ).toLocaleDateString();
      });

      this.brasilEscola = items;
    });
    // STOODI
    this.ServicePlaylist.getVideosStoodi().subscribe((data) => {
      const items = data.items;

      items.map((data) => {
        data.snippet.publishedAt = new Date(
          data.snippet.publishedAt
        ).toLocaleDateString();
      });

      this.stoodi = items;
    });
  }

  watchVideo(id: string): void {
    this.router.navigate([`watch/${id}`]);
  }
}
