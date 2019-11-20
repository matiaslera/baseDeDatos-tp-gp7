import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@Angular/material';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/service/loginService/loginService.service';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent {

  public loginForm: FormGroup
  username:string
  password:string

  constructor(private router: Router, private userLogService: LoginServiceService, private snackBar: MatSnackBar, private biulter: FormBuilder) {
    this.loginForm = this.biulter.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName)
  }

  async authenticate() {
  
      await this.userLogService.authenticate(this.username,this.password)
      if(this.userLogService.isAuthenticated()){
        this.navigateHome()
      }
      else{this.error("Username o Password invalidos")}
    }
  formHasData() {
    return this.loginForm.status == 'INVALID'
  }
  error(errorType: string) {
    this.snackBar.open(errorType, 'x', {
      duration: 2000,
    });
  }
  navigateHome() {
    this.router.navigate(['/home/descargas']);
  }

}

