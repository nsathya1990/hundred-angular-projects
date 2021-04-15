import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-cut-out',
  templateUrl: './banner-cut-out.component.html',
  styleUrls: ['./banner-cut-out.component.scss'],
})
export class BannerCutOutComponent implements OnInit {
  imageUrl =
    'https://images.unsplash.com/photo-1509478074354-0de2c9bb7c8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=973&q=80';
  @Input() title = '100 Angular Challenges';

  constructor() {}

  ngOnInit(): void {}
}
