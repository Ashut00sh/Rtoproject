import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public invaliddata = false;
  public myfb = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  async afterlogin() {
    const data = this.myfb.value;
    console.log(data);

    //ajax call(await is missing)
    let url = 'http://localhost:4000/auth-user';
    const result: any = await this.http.post(url, data).toPromise();
    if (result.opr) {
      this.router.navigate(['Home']);
      sessionStorage.setItem('sid', 'true');
    } else {
      this.invaliddata = true;
    }
  }
  //after ajax call go to register page
  /*if (data.username === 'username' && data.password === 'password') {
      this.router.navigate(['Home']);
      sessionStorage.setItem('sid', 'true');
    } else {
      this.invaliddata = true;
    }
  }*/
}
