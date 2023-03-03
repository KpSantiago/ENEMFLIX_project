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

    const categoryExists = JSON.parse(
      localStorage.getItem('category') || 'null'
    );

    if (categoryExists == null) {
      this.ServiceCategories.getVideosCategories(category!).subscribe(
        (data) => {
          const items = data.items;

          localStorage.setItem('category', JSON.stringify(items))

          this.category = items;
        }
      );
    } else {
      this.category = categoryExists;
    }
  }
}
