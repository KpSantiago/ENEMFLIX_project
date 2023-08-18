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
    { url: '../../../../assets/redacao.png' },
    { url: '../../../../assets/matematicaEST.png' },
    { url: '../../../../assets/linguagensEC.png' },
    { url: '../../../../assets/cienciasDaNatureza.png' },
    { url: '../../../../assets/cienciasHumanas.png' },
  ];

  redacao!: Categories[];
  matEsuasTec!: Categories[];
  lingEcodigos!: Categories[];
  cienciasDaNatureza!: Categories[];
  cienciasHumanas!: Categories[];

  arrowRight = faChevronRight;
  arrowLeft = faChevronLeft;

  constructor(
    private ServicePlaylist: PlaylistService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const redacaoExists: Categories[] | null = JSON.parse(
      localStorage.getItem('redacao') || 'null'
    );

    const matematicaESTExists: Categories[] | null = JSON.parse(
      localStorage.getItem('matematicaEST') || 'null'
    );

    const linnguagensECExists: Categories[] | null = JSON.parse(
      localStorage.getItem('linguagensEC') || 'null'
    );

    const cienciasDaNaturezaExists: Categories[] = JSON.parse(
      localStorage.getItem('cienciasDaNatureza') || 'null'
    );

    const cienciasHumanasExists: Categories[] = JSON.parse(
      localStorage.getItem('cienciasHumanas') || 'null'
    );

    if (redacaoExists == null) {
      this.ServicePlaylist.getVideosRedacao().subscribe((data) => {
        const items = data.items;

        items.map((data) => {
          data.snippet.publishedAt = new Date(
            data.snippet.publishedAt!
          ).toLocaleDateString('pt-BR');
        });

        localStorage.setItem('redacao', JSON.stringify(items));

        this.redacao = items;
      });
    } else {
      this.redacao = redacaoExists;
    }

    if (matematicaESTExists == null) {
      this.ServicePlaylist.getVideosMatematicaEsuasTecnologias().subscribe(
        (data) => {
          const items = data.items;

          items.map((data) => {
            data.snippet.publishedAt = new Date(
              data.snippet.publishedAt!
            ).toLocaleDateString('pt-BR');
          });

          localStorage.setItem('matematicaEST', JSON.stringify(items));

          this.matEsuasTec = items;
        }
      );
    } else {
      this.matEsuasTec = matematicaESTExists;
    }

    if (linnguagensECExists == null) {
      this.ServicePlaylist.getVideosLinguagensEcodigos().subscribe((data) => {
        const items = data.items;

        items.map((data) => {
          data.snippet.publishedAt = new Date(
            data.snippet.publishedAt!
          ).toLocaleDateString('pt-BR');
        });

        localStorage.setItem('linguagensEC', JSON.stringify(items));

        this.lingEcodigos = items;
      });
    } else {
      this.lingEcodigos = linnguagensECExists;
    }

    if (cienciasDaNaturezaExists == null) {
      this.ServicePlaylist.getVideosCienciasDaNatureza().subscribe((data) => {
        const items = data.items;

        items.map((data) => {
          data.snippet.publishedAt = new Date(
            data.snippet.publishedAt
          ).toLocaleDateString();
        });

        localStorage.setItem('cienciasDaNatureza', JSON.stringify(items));

        this.cienciasDaNatureza = items;
      });
    } else {
      this.cienciasDaNatureza = cienciasDaNaturezaExists;
    }

    if (cienciasHumanasExists) {
      this.cienciasHumanas = cienciasHumanasExists;
    }
    if (cienciasHumanasExists == null) {
      this.ServicePlaylist.getVideosCienciasHumanas().subscribe((data) => {
        const items = data.items;

        items.map((data) => {
          data.snippet.publishedAt = new Date(
            data.snippet.publishedAt
          ).toLocaleDateString();
        });

        localStorage.setItem('cienciasHumanas', JSON.stringify(items));

        this.cienciasHumanas = items;
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
  }

  watchVideo(id: string): void {
    this.router.navigate([`watch/${id}`]);
  }
}
