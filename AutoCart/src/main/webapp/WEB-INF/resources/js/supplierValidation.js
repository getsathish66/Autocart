function validation(){
	var name = document.getElementById('name');
	var email = document.getElementById('email');
	var description = document.getElementById('description');
	var contact = document.getElementById('contact');
	var address = document.getElementById('address');
	var citycode = document.getElementById('citycode');
	
	
	// Check each input in the order that it appears in the form!
	 if (notEmpty(name, "Name Should not be empty")) {
			if (isAlphabet(name, "Please enter only letters for Nname")) {
				
			
				if (notEmpty(email,"EmailId Should not be empty")) {
					if (emailValidator(email,"EmailId Should be in format of abc@xyz.com ")) {
						

	if (notEmpty(description, "Description Should not be empty")) {
		if (isAlphabet(description, "Please enter only letters for Description")) {
			
			if (notEmpty(contact, "Contactnumber Should not be empty")) {
				if (isNumeric(contact,"Please enter only number for Contactnumber")) {

			if (notEmpty(address, "address Should not be empty")) {

				if (isAlphanumeric(address,"Numbers and Letters Only for Address")) {
					if (notEmpty(citycode, "Citycode Should not be empty")) {

						if (isNumeric(citycode,"Numbers and Letters Only for Citycode")) {
					
							
									return true;
											}
										}
									}
								}
							}}}
						}
					
				}
			}
		}
	}
		return false;
	}
	function notEmpty(elem, helperMsg) {
		if (elem.value.length == 0) {
			alert(helperMsg);
			elem.focus(); // set the focus to this input
			return false;
		}
		return true;
	}
	function isNumeric(elem, helperMsg) {
		var numericExpression = /^[0-9]+$/;
		if (elem.value.match(numericExpression)) {
			return true;
		} else {
			alert(helperMsg);
			elem.focus();
			return false;
		}
	}
	function isAlphanumeric(elem, helperMsg) {
		var alphaExp = /^[0-9a-zA-Z]+$/;
		if (elem.value.match(alphaExp)) {
			return true;
		} else {
			alert(helperMsg);
			elem.focus();
			return false;
		}
	}
	function emailValidator(elem, helperMsg) {
		var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
		if (elem.value.match(emailExp)) {
			return true;
		} else {
			alert(helperMsg);
			elem.focus();
			return false;
		}
	}
	function isAlphabet(elem, helperMsg) {
		var alphaExp = /^[a-z A-Z]+$/;
		if (elem.value.match(alphaExp)) {
			return true;
		} else {
			alert(helperMsg);
			elem.focus();
			return false;
		}
	}
	

		 
