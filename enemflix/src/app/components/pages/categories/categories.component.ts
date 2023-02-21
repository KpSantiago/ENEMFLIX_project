import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categories } from 'src/app/interfaces/Categories';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  category!: Categories[];

  constructor(
    private router: ActivatedRoute,
    private ServiceCategories: CategoriesService
  ) {}

  ngOnInit(): void {
    const category = this.router.snapshot.paramMap.get('c');

    this.ServiceCategories.getVideosCategories(category!).subscribe((data) => {
      const items = data.items;

      this.category = items;
    });
  }
}
