import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  search!: FormGroup;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.search = new FormGroup({
      query: new FormControl(''),
    });
  }

  searchVideos(): void {
    this.router.navigate([`search/${this.search.value.query}`]);
  }
}
