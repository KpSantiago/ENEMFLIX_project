import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categories } from 'src/app/interfaces/Categories';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  category!: Categories[];
  categoryName!: string;

  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private ServiceCategories: CategoriesService
  ) {}

  ngOnInit(): void {
    const category = this.router.snapshot.paramMap.get('c');
    this.categoryName = category!;
    const categoryExists = JSON.parse(
      localStorage.getItem('category') || 'null'
    );

    if (categoryExists == null) {
      this.ServiceCategories.getVideosCategories(category!).subscribe(
        (data) => {
          const items = data.items;

          localStorage.setItem(
            'category',
            JSON.stringify({ cName: this.categoryName, data: items })
          );

          this.category = items;
        }
      );
    } else {
      if (categoryExists.name == this.categoryName) {
        this.category = categoryExists.data;
      } else {
        this.ServiceCategories.getVideosCategories(category!).subscribe(
          (data) => {
            const items = data.items;

            items.map((data) => {
              data.snippet.publishedAt = new Date(
                data.snippet.publishedAt
              ).toLocaleDateString();
            });

            localStorage.setItem(
              'category',
              JSON.stringify({ cName: this.categoryName, data: items })
            );

            this.category = items;
          }
        );
      }
    }
  }

  redirectToVideo(id: string) {
    this.route.navigate([`watch/${id}`]);
  }
}
