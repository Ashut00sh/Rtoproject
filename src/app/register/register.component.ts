import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public invaliddata = true;
  public myfb = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
  });
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  async register() {
    this.invaliddata = false;
    const data = this.myfb.value;
    console.log(data);
    const url = 'http://localhost:4000/register';
    await this.http.post(url, data).toPromise();

    this.router.navigate(['login']);
  }
}
