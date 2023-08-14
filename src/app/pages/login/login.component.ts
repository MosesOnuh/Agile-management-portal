import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChatService } from '../../services/chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  apiErrorMessages: string[] = []; //check this
  loginApiErrorMessages: string[] = []; //check this
  createdUser: any = {};
  dropdownOptions = [
    'Developer',
    'Scrum master',
    'Product Owner',
    'Business Analyst',
  ];
  display: string = '';

  // display enums
  login: string = 'login';
  register: string = 'register';

  registerForm: FormGroup = new FormGroup({});
  loginForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private chatService: ChatService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.initializeForms();
    this.display = this.register;
  }

  initializeForms() {
    this.registerForm = this.formBuilder.group({
      firstName: [],
      lastName: [],
      email: [],
      // role: ['Select an option...'],
      role: [],
      password: [],
    });

    this.loginForm = this.formBuilder.group({
      email: [],
      password: [],
    });
  }

  submitForm() {
    console.log(this.registerForm.value)
    this.chatService.registerUser(this.registerForm.value).subscribe({
      next: (response) => {
        this.registerForm.reset();
        this.chatService.myUserId = response?.id;
        this.chatService.myName = response?.firstName;
        this.chatService.myRole = response?.role;
        console.log('register response', response);
        this.route.navigate(['community']);
      },
      error: (error) => {
        this.apiErrorMessages.push(error.error.title || error.error.error);
      },
    });
  }

  submitlogin() {
    this.chatService.loginUser(this.loginForm.value).subscribe({
      next: (response) => {
        this.registerForm.reset();
        this.chatService.myUserId = response?.id;
        this.chatService.myName = response?.firstName;
        this.chatService.myRole = response?.role;
        console.log('register response', response);
        this.route.navigate(['community']);
      },
      error: (error) => {
        this.loginApiErrorMessages.push(error.error.title || error.error.error);
      },
    });
  }

  displayRegister() {
    this.display = this.register;
    this.loginApiErrorMessages = [];
  }

  displayLogin() {
    this.display = this.login;
    this.apiErrorMessages = []
  }
}
