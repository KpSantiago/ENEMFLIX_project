import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css'],
})
export class TopHeaderComponent implements OnInit {
  search!: FormGroup;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.search = new FormGroup({
      query: new FormControl(''),
    });

    const searchedVideos = JSON.parse(
      localStorage.getItem('searchedVideos') || 'null'
    );

    if (searchedVideos != null) {
      localStorage.setItem('searchedVideos', JSON.stringify(null));
    }
  }

  searchVideos(): void {
    this.router.navigate([`search/${this.search.value.query}`]);
  }

  redirect(query: string): void {
    this.router.navigate([query]);
  }
}
