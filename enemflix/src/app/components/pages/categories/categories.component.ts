import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    const category = this.router.snapshot.paramMap.get('category');

    console.log(category);
  }
}
