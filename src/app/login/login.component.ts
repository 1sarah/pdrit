import {Component, OnInit, Inject} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Notify} from '../shared/class/notify';
import {MyErrorStateMatcher} from '../shared/class/error-state-handler';
import {StewardService} from '../shared/services/steward/steward.service';
import { DOCUMENT } from '@angular/common';
import { Login } from './../entities/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  isFailed = false;
  message: string;
  matcher = new MyErrorStateMatcher();
  users = [];
  loadtext = '';
  isLoggedIn = true;
  login: Login;

  constructor(
    public router: Router,
    public notify: Notify,
    private stewardService: StewardService<any, any>,
    @Inject(DOCUMENT) document
  ) {
    this.login = new Login();
  }

  ngOnInit() {
    
    const inst = this;
    window.localStorage.clear();
  }

  onLoggedin(form: NgForm) {
    const params = new URLSearchParams();
    params.append('username', this.model.username);
    params.append('password', this.model.password);
   

    this.stewardService.postNoToken('api/v1/auth/login', this.login).subscribe((response: any) => {
      if (response.code === 200) {
        localStorage.setItem('username', 'Admin');
        localStorage.setItem('isLoggedin', 'true');
        localStorage.setItem('access_token', response.accessToken);
        this.notify.showSuccess(response.message);
        this.router.navigate(['home/dashboard/dashboard']);
      } else {
        this.notify.showWarning(response.data.message);
      }

    },
      error => {
       
        this.message = error.error.message;
        this.notify.show(this.message);

      });
  }

}
