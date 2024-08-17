import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { AuthGuard } from '@myngapp/auth';
export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('@myngapp/auth').then((m) => m.authRoutes),
  },
];
