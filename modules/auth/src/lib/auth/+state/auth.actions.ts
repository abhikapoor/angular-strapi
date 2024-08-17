import { createAction, props } from '@ngrx/store';
import { AuthEntity } from './auth.models';

export const initAuth = createAction(
  '[Auth Page] Init',
  props<{ email: string; password: string }>()
);

export const loadAuthSuccess = createAction(
  '[Auth/API] Load Auth Success',
  props<{ user: any }>()
);

export const loadAuthFailure = createAction(
  '[Auth/API] Load Auth Failure',
  props<{ error: any }>()
);
