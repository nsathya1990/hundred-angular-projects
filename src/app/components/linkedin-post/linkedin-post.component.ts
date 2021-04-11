import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-linkedin-post',
  templateUrl: './linkedin-post.component.html',
  styleUrls: ['./linkedin-post.component.scss'],
})
export class LinkedinPostComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  get linkedInMessage(): string {
    const base = 'https://www.linkedin.com/shareArticle?mini=true';
    const currentSite = `&url=https://sathyapriyan-portfolio.web.app${this.router.url}`;

    return `${base}${currentSite}`;
  }
}
