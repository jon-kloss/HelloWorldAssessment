import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { RegisterUserService } from '../../services/register-user.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	firstName: String;
	lastName: String;
	address1: String;
	address2: String;	
	city: String;
	state: String;
	zip: Number;
	country: String;
	
  constructor(private validateService: ValidateService, private flashMessage: FlashMessagesService, private registerUserService: RegisterUserService, private router: Router ) { }

  ngOnInit() {
  }
  register()
  {
  	const user = {
  		firstName: this.firstName,
		lastName: this.lastName,
		address1: this.address1,
		addresss: this.address2,
		city: this.city,
		state: this.state,
		zip: this.zip,
		country: this.country
  	}
  	if(!this.validateService.validateFields(user))
  	{
  		this.flashMessage.show("Please fill in all fields." , { cssClass: "alert-danger", timeout: 2000 });
  		return false;
  	}
  	if(!this.validateService.validateCountry(user.country))
  	{
  		this.flashMessage.show("Please enter a valid country" , { cssClass: "alert-danger", timeout: 2000 });
  		return false;
  	}
  	if(!this.validateService.validateZip(user.zip))
  	{
  		this.flashMessage.show("Please enter a valid zip code" , { cssClass: "alert-danger", timeout: 2000 });
  		return false;
  	}
  	this.registerUserService.registerUser(user).subscribe(data => {
  	if(data.success)
  		{
  			this.flashMessage.show("You are now registered!" , { cssClass: "alert-success", timeout: 2000 });
  			this.router.navigate(['/confirmation']);
  		}
  	})
  }
}
