import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories-menu',
  templateUrl: './categories-menu.component.html',
  styleUrls: ['./categories-menu.component.css'],
})
export class CategoriesMenuComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  redirect(query: string): void {
    this.router.navigate([query]);
  }
}
