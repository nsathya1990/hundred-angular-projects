import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  constructor(
    private title: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  initializeTitleService(): void {
    this.router.events
      .pipe(filter((e: any) => e instanceof NavigationEnd))
      .subscribe(() => {
        const { data } = this.activatedRoute.root.firstChild.snapshot;
        const mainTitle = '100 Angular Challenges';
        const lastTitle = this.title.getTitle();

        if (data?.subTitle) {
          const title = `${mainTitle} - ${data.subTitle}`;

          if (lastTitle !== title) {
            this.title.setTitle(title);
          }
        } else {
          if (lastTitle !== mainTitle) {
            this.title.setTitle(mainTitle);
          }
        }
      });
  }
}
