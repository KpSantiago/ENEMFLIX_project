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
    const descomplicaExists: Categories[] | null = JSON.parse(
      localStorage.getItem('descomplica') || 'null'
    );

    const brasilEscolaExists: Categories[] = JSON.parse(
      localStorage.getItem('brasilEscola') || 'null'
    );

    const stoodiExists: Categories[] = JSON.parse(
      localStorage.getItem('stoodi') || 'null'
    );

    // DESCOMPLPICA
    if (descomplicaExists == null) {
      this.ServicePlaylist.getVideosDescomplica().subscribe((data) => {
        const items = data.items;

        items.map((data) => {
          data.snippet.publishedAt = new Date(
            data.snippet.publishedAt
          ).toLocaleDateString();
        });

        localStorage.setItem('descomplica', JSON.stringify(items));

        this.descomplica = items;
      });
    } else {
      this.descomplica = descomplicaExists;
    }

    // BRASIL ESCOLA
    if (brasilEscolaExists == null) {
      this.ServicePlaylist.getVideosBrasilEscola().subscribe((data) => {
        const items = data.items;

        items.map((data) => {
          data.snippet.publishedAt = new Date(
            data.snippet.publishedAt
          ).toLocaleDateString();
        });

        localStorage.setItem('brasilEscola', JSON.stringify(items));

        this.brasilEscola = items;
      });
    } else {
      this.brasilEscola = brasilEscolaExists;
    }

    // STOODI
    if (stoodiExists) {
      this.stoodi = stoodiExists;
    }
    if (stoodiExists == null) {
      this.ServicePlaylist.getVideosStoodi().subscribe((data) => {
        const items = data.items;

        items.map((data) => {
          data.snippet.publishedAt = new Date(
            data.snippet.publishedAt
          ).toLocaleDateString();
        });

        localStorage.setItem('stoodi', JSON.stringify(items));

        this.stoodi = items;
      });
    }
  }

  watchVideo(id: string): void {
    this.router.navigate([`watch/${id}`]);
  }
}
