import { Component, OnDestroy, Input, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import pageSettings from '../../../config/page-settings';
import { UserService } from '../../../services/user.service';
import {SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
    selector: 'login',
    templateUrl: './login.page.html'
})

export class LoginPage implements OnDestroy {
  pageSettings = pageSettings;

  @Input() userAthentication = {
    userName: '',
    password: ''
  }
  errorMessage:string = null;
  errorActive:boolean = false;
  constructor(private router: Router, private userService:UserService, @Inject(SESSION_STORAGE) private storage: WebStorageService) {
    this.pageSettings.pageEmpty = true;
  }

  ngOnDestroy() {
    this.pageSettings.pageEmpty = false;
  }

  formSubmit(f: NgForm) {
    this.router.navigate(['dashboard/v2']);
  }

  authenticate(f: NgForm){
    this.userService.authentication(this.userAthentication).subscribe((user) => {
        this.storage.set("user", user);
        this.router.navigate(['/nexos/home/home']);
      }, (err) => {
        this.errorMessage = err.error;
        this.errorActive = true;
        setTimeout(() => {
          this.errorMessage = '';
          this.errorActive = false;
        }, 5000);
      });

  }
}
