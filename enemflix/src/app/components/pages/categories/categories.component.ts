import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
    
    constructor(private router: ActivatedRoute, private ServiceCategories: CategoriesService) {}

  ngOnInit(): void {
    const category = this.router.snapshot.paramMap.get('category');
    
      this.ServiceCategories.getVideosCategories("Português").subscribe(
        (data) => {
          const items = data.items;
  
          console.log(items);
        }
      );
    console.log(category);
  }


}
