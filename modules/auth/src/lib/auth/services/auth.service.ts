import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  login(email: string, password: string) {
    return this.http
      .post('http://localhost:1337/api/auth/local', {
        identifier: email,
        password,
      })
      .pipe(delay(5000));
  }

  signup(username: string, email: string, password: string) {
    return this.http.post('http://localhost:1337/api/auth/local/register', {
      username,
      email,
      password,
    });
  }
}
