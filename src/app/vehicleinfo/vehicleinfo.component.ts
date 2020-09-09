import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicleinfo',
  templateUrl: './vehicleinfo.component.html',
  styleUrls: ['./vehicleinfo.component.css'],
})
export class VehicleinfoComponent implements OnInit {
  public success = false;
  public myfb = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    passdate: ['', Validators.required],
    gender: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', Validators.required],
    vrnum: ['', Validators.required],
    engnum: ['', Validators.required],
    chassisnum: ['', Validators.required],
    password: ['', Validators.required],
    cadd: ['', Validators.required],
    padd: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    pincode: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: Router
  ) {}

  ngOnInit(): void {}

  async getinfo() {
    const data = this.myfb.value;
    console.log(data);
    this.success = true;
    //ajac call
    let url = 'http://localhost:4000/getvehicleinfo';
    await this.http.post(url, data).toPromise();
    this.route.navigate(['Home']);
  }
}
