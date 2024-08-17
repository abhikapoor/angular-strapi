import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { initAuth } from '../../+state/auth.actions';
import { Store, select } from '@ngrx/store';
import { selectAuthLoaded } from '../../+state/auth.selectors';
import { Observable, map } from 'rxjs';
@Component({
  selector: 'lib-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loading$!: Observable<boolean>;
  constructor(private store: Store) {
    this.loading$ = this.store.select(selectAuthLoaded);
  }
  loginForm!: FormGroup;

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }

  onSubmit() {
    const email: string = this.loginForm.value.username;
    const password: string = this.loginForm.value.password;
    this.store.dispatch(initAuth({ email, password }));
  }
}
