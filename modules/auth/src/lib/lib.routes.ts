import { Route } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { provideStore, provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import * as fromAuth from './/auth/+state/auth.reducer';
import { AuthEffects } from './/auth/+state/auth.effects';
import { LoginComponent } from './auth/features/login/login.component';
import { SignupComponent } from './auth/features/signup/signup.component';
import { PasswordResetComponent } from './auth/features/password-reset/password-reset.component';

export const authRoutes: Route[] = [
  {
    path: '',
    component: AuthComponent,
    providers: [
      provideState(fromAuth.AUTH_FEATURE_KEY, fromAuth.authReducer),
      provideEffects(AuthEffects),
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'password-reset',
    component: PasswordResetComponent,
  },
];
