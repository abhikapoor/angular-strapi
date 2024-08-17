import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}
  setToken(key: string, token: string) {
    localStorage.setItem(key, token);
  }

  getToken(key: string) {
    return localStorage.getItem(key);
  }

  deleteToken(key: string) {
    localStorage.removeItem(key);
  }
}
