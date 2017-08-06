import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';

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
	
  constructor(private validateService: ValidateService) { }

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
  	//var validZip = ("^\\d{5}(-\\d{4})?$").test(userZip);
  	if(!this.validateService.validateFields(user))
  	{
  		console.log("please fill in all fields.");
  		return false;
  	}
  	if(!this.validateService.validateCountry(user.country))
  	{
  		console.log("please enter a valid country");
  		return false;
  	}
  	console.log("user zip is before function " + user.zip);
  	if(!this.validateService.validateZip(user.zip))
  	{
  		console.log("please enter a valid zip code");
  		return false;
  	}

  }
}
