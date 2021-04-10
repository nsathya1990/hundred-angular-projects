import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-ratings',
  templateUrl: './star-ratings.component.html',
  styleUrls: ['./star-ratings.component.scss'],
})
export class StarRatingsComponent implements OnInit {
  @Input() rating = 5;

  constructor() {}

  ngOnInit(): void {}

  get fullStars(): number[] {
    const totalFullStars = Math.floor(this.rating);
    return Array(totalFullStars).fill(0);
  }

  get hasHalfStar(): boolean {
    const hasHalfStar =
      this.rating - Math.floor(this.rating) >= 0.5 && this.rating !== 5;
    return hasHalfStar;
  }

  get emptyStars(): number[] {
    const highestRating = 5;
    const totalEmptyStars = this.hasHalfStar
      ? Math.floor(highestRating - this.rating)
      : Math.ceil(highestRating - this.rating);
    return Array(totalEmptyStars).fill(0);
  }
}
