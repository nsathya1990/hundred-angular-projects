import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton-loader',
  templateUrl: './skeleton-loader.component.html',
  styleUrls: ['./skeleton-loader.component.scss'],
})
export class SkeletonLoaderComponent implements OnInit {
  @Input() width = '100%';
  @Input() height = '100%';

  get dimensions(): {} {
    return {
      width: this.width,
      height: this.height,
    };
  }

  constructor() {}

  ngOnInit(): void {}
}
