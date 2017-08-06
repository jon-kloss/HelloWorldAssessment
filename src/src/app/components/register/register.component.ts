import { Component, OnInit } from '@angular/core';

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
	
  constructor() { }

  ngOnInit() {
  }
  register()
  {
  	const user = {
  		firstName = this.firstName,
		lastName = this.lastName,
		address1 = this.address1,
		addresss = this.address2,
		city this.city,
		state this.state,
		zip = this.zip,
		country this.country
  	}
  }
}
