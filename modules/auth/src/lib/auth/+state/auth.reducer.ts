import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as AuthActions from './auth.actions';
import { AuthEntity } from './auth.models';

export const AUTH_FEATURE_KEY = 'auth';

export interface AuthState {
  loading: boolean; // has the Auth list been loaded
  error?: string | null; // last known error (if any)
  user?: any | null;
}

export const initialAuthState: AuthState = {
  // set initial required properties
  loading: false,
};

const reducer = createReducer(
  initialAuthState,
  on(AuthActions.initAuth, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(AuthActions.loadAuthSuccess, (state, { user }) => ({
    ...state,
    loading: false,
    user,
  })),
  on(AuthActions.loadAuthFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return reducer(state, action);
}
