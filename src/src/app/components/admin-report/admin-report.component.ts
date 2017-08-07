import { Component, OnInit } from '@angular/core';
import { RegisterUserService } from '../../services/register-user.service';
import { User } from '../../services/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-report',
  templateUrl: './admin-report.component.html',
  styleUrls: ['./admin-report.component.css']
})
export class AdminReportComponent implements OnInit {
	user: Object;
	
  constructor(private registerUserService: RegisterUserService, private router: Router ) { }

  ngOnInit() {
  	console.log("this is a string 1");
  	this.registerUserService.getRegisterUsers().subscribe(users => {
  	this.user = users.user; }, err => {
  		console.log(err);
  			return false;
  	});
  }

}
