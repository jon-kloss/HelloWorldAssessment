import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { User } from './user';
import 'rxjs/add/operator/map';

@Injectable()
export class RegisterUserService {
	user: any;

  constructor(private http:Http) { }
  
  registerUser(user)
  {
  	let headers = new Headers();
  	headers.append('Content-Type', "application/json");
  	return this.http.post('users/register', user,{ headers: headers }).map(res => res.json());
  }

  getRegisterUsers()
  {
  	let headers = new Headers();
  	headers.append('Content-Type', "application/json");
  	return this.http.get('users/adminReport',{ headers: headers }).map(res => res.json());

  }
}
