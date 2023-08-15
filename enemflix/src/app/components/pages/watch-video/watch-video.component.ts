import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Categories } from 'src/app/interfaces/Categories';
import { Videos } from 'src/app/interfaces/Videos';

import { CategoriesService } from 'src/app/services/categories/categories.service';
import { videosService } from 'src/app/services/videos/videos.service';

@Component({
  selector: 'app-watch-video',
  templateUrl: './watch-video.component.html',
  styleUrls: ['./watch-video.component.css'],
})
export class WatchVideoComponent implements OnInit {
  @ViewChild('watchContainer') watch!: ElementRef<HTMLDivElement>;

  titleVideo!: string;
  video!: Videos[];
  relationedVideos!: Categories[];

  constructor(
    private routes: ActivatedRoute,
    private router: Router,
    private ServiceVideos: videosService,
    private ServiceCategories: CategoriesService
  ) {
    this.getRelationedVideos();
  }

  ngOnInit(): void {
    const id = this.routes.snapshot.paramMap.get('i');

    const videoExists = JSON.parse(localStorage.getItem('video') || 'null');

    if (videoExists == null) {
      this.ServiceVideos.getVideo(id!).subscribe((data) => {
        const items = data.items;
        this.titleVideo = items[0].snippet.title;

        localStorage.setItem('video', JSON.stringify(items));

        this.video = items;

        this.watch.nativeElement.innerHTML = this.video[0].player.embedHtml;
      });
    } else {
      this.video = videoExists;

      if (this.video[0].id === id) {
        console.log(this.video);

        document.querySelector('.watchContainer')!.innerHTML =
          this.video[0].player.embedHtml;
      } else {
        this.ServiceVideos.getVideo(id!).subscribe((data) => {
          const items = data.items;
          this.titleVideo = items[0].snippet.title;

          localStorage.setItem('video', JSON.stringify(items));

          this.video = items;

          this.watch.nativeElement.innerHTML = this.video[0].player.embedHtml;
        });
      }
    }
  }

  getRelationedVideos() {
    // RELACIONADOS AO VÍDEO
    const relationedVideosExists = JSON.parse(
      localStorage.getItem('relationedVideos') || 'null'
    );

    if (relationedVideosExists == null) {
      this.ServiceCategories.getVideosCategories(this.titleVideo!).subscribe(
        (data) => {
          const items = data.items;

          items.map((data) => {
            data.snippet.publishedAt = new Date(
              data.snippet.publishedAt
            ).toLocaleDateString();
          });

          localStorage.setItem('relationedVideos', JSON.stringify(items));

          this.relationedVideos = items;
        }
      );
    } else {
      this.relationedVideos = relationedVideosExists;
    }
  }

  async watchVideo(id: string) {
    const relationedVideoExists = JSON.parse(
      localStorage.getItem('relationedVideos') || 'null'
    );

    await this.router.navigate([`watch/${id}`]);
    location.reload();
    if (relationedVideoExists == null) {
      this.getRelationedVideos();
    } else {
      this.relationedVideos = relationedVideoExists;
    }
  }
}
