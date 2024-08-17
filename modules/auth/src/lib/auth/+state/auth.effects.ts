import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, map, timeout, delay, tap } from 'rxjs';
import * as AuthActions from './auth.actions';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '@myngapp/shared';

@Injectable()
export class AuthEffects {
  constructor(
    private authService: AuthService,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}
  private actions$ = inject(Actions);
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.initAuth),
      switchMap(({ email, password }) =>
        this.authService.login(email, password).pipe(
          map((user: any) => AuthActions.loadAuthSuccess({ user })),
          tap((user: any) => {
            this.localStorageService.setToken('TOKEN', user.user.jwt);
            this.router.navigate(['']);
          }),
          catchError((error) => {
            console.error('Login Error:', error);
            return of(AuthActions.loadAuthFailure({ error }));
          })
        )
      )
    )
  );
}
