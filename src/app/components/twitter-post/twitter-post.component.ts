import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-twitter-post',
  templateUrl: './twitter-post.component.html',
  styleUrls: ['./twitter-post.component.scss'],
})
export class TwitterPostComponent implements OnInit {
  @Input() baseHref = 'https://sathyapriyan-portfolio.web.app/';
  @Input() hashTags: string[] = [
    'SathyapriyanNadar',
    'JavaScript',
    'TypeScript',
    'Angular',
    'React',
  ];

  constructor(private titleService: Title) {}

  ngOnInit(): void {}

  get twitterUrl(): string {
    const base = this.getBaseWithHashTagsAndRoute();
    const message = encodeURIComponent(
      `Check out ${this.titleService.getTitle()} and become a CODING GOD!!!`
    );

    return `${base}${message}`;
  }

  private getBaseWithHashTagsAndRoute(): string {
    const route = encodeURI(this.baseHref);
    const hashTags = this.hashTags.join(',');

    return `https://twitter.com/intent/tweet?hashtags=${encodeURIComponent(
      hashTags
    )}&related=nsathya1990&url=${route}&text=`;
  }
}
