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
  @ViewChild('watchContainer') wacth!: ElementRef<HTMLDivElement>;
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

    this.ServiceVideos.getVideo(id!).subscribe((data) => {
      const items = data.items;
      this.titleVideo = items[0].snippet.title;
      this.video = items;

      this.wacth.nativeElement.innerHTML = this.video[0].player.embedHtml;
    });
  }

  getRelationedVideos() {
    // RELACIONADOS AO VÍDEO
    this.ServiceCategories.getVideosCategories(this.titleVideo!).subscribe(
      (data) => {
        const items = data.items;

        this.relationedVideos = items;
      }
    );
  }

  async watchVideo(id: string) {
    await this.router.navigate([`watch/${id}`]);
    location.reload();
    this.getRelationedVideos();
  }
}
