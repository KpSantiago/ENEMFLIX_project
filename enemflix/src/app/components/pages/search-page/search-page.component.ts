import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Categories } from 'src/app/interfaces/Categories';

import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent implements OnInit {
  videos!: Categories[];

  constructor(
    private ServiceSearch: SearchService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const search = this.route.snapshot.paramMap.get('q');

    const searchedVideosExists = JSON.parse(
      localStorage.getItem('searchedVideos') || 'null'
    );

    if (searchedVideosExists == null) {
      this.ServiceSearch.getSearchVideos(search!).subscribe((data) => {
        const items = data.items;

        localStorage.setItem('searchedVideos', JSON.stringify(items));

        this.videos = items;

        console.log(items);
      });
    } else {
      this.videos = searchedVideosExists;
    }
  }

  watchVideo(id: string): void {
    this.router.navigate([`watch/${id}`]);
  }
}
