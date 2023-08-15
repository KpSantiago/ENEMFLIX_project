import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css'],
})
export class SlideComponent implements OnInit {
  @Input() slideImages: { url: string }[] = [];

  currentIndex = 0;

  constructor() {}

  goToNext() {
    if (this.currentIndex == this.slideImages.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }
  }

  getCurrentSlide(): string {
    return `${this.slideImages[this.currentIndex].url}`;
  }

  goToSlide(n: number) {
    this.currentIndex = n;
  }

  ngOnInit(): void {
    this.autoSlide();
  }

  autoSlide() {
    setInterval(() => {
      this.goToNext();
    }, 2500);
  }
}
