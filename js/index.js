
	function scrollToSkills()
	{
		window.scroll(0,601);
	}
	function scrollToExp()
	{
		window.scroll(0,768);
	}
	function scrollToContact()
	{
		window.scroll(0,2005);
	}
	document.getElementsByName('submit')[0].onclick = function()
	{
		if(checkContact())
		{
			document.querySelector(".warningMessage").innerHTML = "Gelukt";
		} 
		else 
		{
			document.querySelector(".warningMessage").innerHTML = "Controleer ingevoerde gegevens.";
		}	
	};

	function checkContact()
	{
		var firstName = document.getElementsByName('firstname')[0].value;
		var lastName = document.getElementsByName('lastname')[0].value;
		var email = document.getElementsByName('email')[0].value;
		
		var namePattern = /^[A-z]+$/;
		var emailPattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

		
		if(!namePattern.test(firstName) || !namePattern.test(lastName) || !emailPattern.test(email))
		{
			return false;
		}
		return true;
	}