import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { StarRatingsComponent } from './components/star-ratings/star-ratings.component';
import { TopOfPageComponent } from './components/top-of-page/top-of-page.component';
import { ComponentDocumentationComponent } from './components/component-documentation/component-documentation.component';
import { ServiceDocumentationComponent } from './services/service-documentation/service-documentation.component';

import { APP_ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AccordionComponent,
    ProgressBarComponent,
    StarRatingsComponent,
    TopOfPageComponent,
    ComponentDocumentationComponent,
    ServiceDocumentationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(APP_ROUTES),
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
