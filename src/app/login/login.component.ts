import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { logging } from 'protractor';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm = new FormGroup({
    userEmail: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
    userPassword: new FormControl('', Validators.required),
  });

  

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private userService: UserService,
    ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.loginForm.valid){
      console.log('Ready to submit');
    }
    else 
      console.log('Submit cancelled');
  }

  getEmailErrorMessage() {
    if (this.loginForm.get('userEmail').hasError('required')) {
      return 'Debes escribir tu correo';
    }
  
    return this.loginForm.get('userEmail').hasError('email') ? 'Ese no es un correo' : '';
  }

  getPasswordErrorMessage(){
    if (this.loginForm.get('userPassword').hasError('required')) {
      return 'Debes rellenar este campo';
    }
  }

  logIn(){
    if(this.loginForm.valid){
      let email = this.loginForm.value['userEmail'];
      let pass = this.loginForm.value['userPassword']
      console.log(email+ '|' + pass);
      if(email=='j@j.com' && pass == '123456')
        this.router.navigate(['inicio']);
      else{
        this.openSnackBar();
      }
    }
  }

  openSnackBar(){
    this.snackBar.open('Ingreso fallido. Revisa tu usuario y/o contraseña', '', {
      duration:3000,
      panelClass: ['warning-colour']
    })
  }

  // registerUser(){
  //   let userForm = {}
  //   this.userService.registerUser(userForm).subscribe(
  //     response => {
  //       console.log('User created');
  //     },
  //     error => {
  //       console.log('error: ',error);
  //     }
  //   )
  // }

}
