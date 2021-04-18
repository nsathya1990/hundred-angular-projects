import { Routes } from '@angular/router';

import { ComponentDocumentationComponent } from './components/component-documentation/component-documentation.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const APP_ROUTES: Routes = [
  {
    data: { subTitle: 'Components' },
    path: '',
    component: ComponentDocumentationComponent,
  },
  {
    data: { subTitle: 'Directives' },
    path: 'directives',
    loadChildren: () =>
      import('./directives/directives.module').then((m) => m.DirectivesModule),
  },
  {
    data: { subTitle: 'Pipes' },
    path: 'pipes',
    loadChildren: () =>
      import('./pipes/pipes.module').then((m) => m.PipesModule),
  },
  {
    data: { subTitle: 'Others' },
    path: 'others',
    loadChildren: () =>
      import('./others/others.module').then((m) => m.OthersModule),
  },
  {
    data: { subTitle: 'Services' },
    path: 'services',
    loadChildren: () =>
      import('./services/services.module').then((m) => m.ServicesModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
