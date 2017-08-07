import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateFields(user)
  {
  	if(user.firstName == undefined || user.lastName == undefined || user.address1 == undefined  || user.city == undefined || user.state == undefined || user.zip == undefined ||user.country == undefined )
  	{
  		return false;
  	}
  	else
  		return true;
  }

  validateCountry(user)
  {
  	return ((user === "US") ? true : false);

  }
  validateZip(userZip)
  {	
  	var regPostalCode = new RegExp("^\\d{5}(-\\d{4})?$");
  		return regPostalCode.test(userZip);
  }
}
