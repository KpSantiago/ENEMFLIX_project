import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  constructor(private ServiceSearch: SearchService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const search = this.route.snapshot.paramMap.get("query");

    this.ServiceSearch.getSearchVideos(search!).subscribe(data => {
      const items = data.items;

      console.log(items)
      console.log(search)
    })
  }


  
}