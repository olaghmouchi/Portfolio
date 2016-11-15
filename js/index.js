
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
		var emailPattern = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;

		
		if(!namePattern.test(firstName) || !namePattern.test(lastName) || !emailPattern.test(email))
		{
			return false;
		}
		return true;
	}