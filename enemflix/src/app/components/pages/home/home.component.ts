import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { Router } from '@angular/router';

import { Categories } from 'src/app/interfaces/Categories';

import { PlaylistService } from 'src/app/services/playlist/playlist.service';

import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('front') front!: ElementRef<HTMLElement>;
  @ViewChild('front2') front2!: ElementRef<HTMLElement>;
  @ViewChild('front3') front3!: ElementRef<HTMLElement>;
  @ViewChild('left') left!: ElementRef<HTMLElement>;
  @ViewChild('left2') left2!: ElementRef<HTMLElement>;
  @ViewChild('left3') left3!: ElementRef<HTMLElement>;
  @ViewChild('videoD') videoD!: ElementRef<HTMLElement>;
  @ViewChild('videoB') videoB!: ElementRef<HTMLElement>;
  @ViewChild('videoS') videoS!: ElementRef<HTMLElement>;

  @ViewChild('cVideo') cVideo!: ElementRef<HTMLElement>;
  @ViewChild('btn1') btn!: ElementRef;

  imagesSlide: { url: string }[] = [
    { url: '../../../../assets/descomplica.png' },
    { url: '../../../../assets/brasilEscola.png' },
    { url: '../../../../assets/stoodi.png' },
  ];

  descomplica!: Categories[];
  descThumb: string = '';
  brasilEscola!: Categories[];
  stoodi!: Categories[];

  arrowRight = faChevronRight;
  arrowLeft = faChevronLeft;

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
            data.snippet.publishedAt!
          ).toLocaleDateString('pt-BR');
        });

        localStorage.setItem('descomplica', JSON.stringify(items));

        this.descomplica = items;
      });
    } else {
      this.descomplica = descomplicaExists;
      //  descomplicaExists
      // .filter((itm) => itm.id.videoId == 'aqazAdlFgTY')
      // .map(
      //   (i) =>
      //     (document.querySelector('.video1')!.innerHTML =
      //       i.snippet.thumbnails.maxres.url)
      // );

      const descVideo = this.descomplica
        .filter((itm) => itm.id.videoId == 'aqazAdlFgTY')
        .map((i) => i.snippet.thumbnails.high.url);
      this.descThumb = descVideo[0];
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

  ngAfterViewInit(): void {
    let n = 0;

    this.front.nativeElement.addEventListener('click', () => {
      n = n + 250;

      if (n >= 4160) {
        n = 4160;
        this.videoD.nativeElement.style.marginLeft = `-${n}px`;
      } else {
        this.videoD.nativeElement.style.marginLeft = `-${n}px`;
      }
    });
    this.left.nativeElement.addEventListener('click', () => {
      n = n - 250;

      if (n >= 4160) {
        n = 0;
        this.videoD.nativeElement.style.marginLeft = `-${n}px`;
      } else {
        this.videoD.nativeElement.style.marginLeft = `-${n}px`;
      }
    });

    this.front2.nativeElement.addEventListener('click', () => {
      n = n + 250;

      if (n >= 4160) {
        n = 4160;
        this.videoB.nativeElement.style.marginLeft = `-${n}px`;
      } else {
        this.videoB.nativeElement.style.marginLeft = `-${n}px`;
      }
    });

    this.left2.nativeElement.addEventListener('click', () => {
      n = n - 250;

      if (n >= 4160) {
        n = 0;
        this.videoD.nativeElement.style.marginLeft = `-${n}px`;
      } else {
        this.videoD.nativeElement.style.marginLeft = `-${n}px`;
      }
    });

    this.front3.nativeElement.addEventListener('click', () => {
      n = n + 250;

      if (n >= 4160) {
        n = 4160;
        this.videoS.nativeElement.style.marginLeft = `-${n}px`;
      } else {
        this.videoS.nativeElement.style.marginLeft = `-${n}px`;
      }
    });

    this.left.nativeElement.addEventListener('click', () => {
      n = n - 250;

      if (n >= 4160) {
        n = 0;
        this.videoD.nativeElement.style.marginLeft = `-${n}px`;
      } else {
        this.videoD.nativeElement.style.marginLeft = `-${n}px`;
      }
    });

    let count = 1;
    // console.log(document.querySelector('#b1')?.ariaChecked);
    this.cVideo.nativeElement.classList.toggle('active');
  }

  watchVideo(id: string): void {
    this.router.navigate([`watch/${id}`]);
  }
}
