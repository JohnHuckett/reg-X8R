"use strict"

window.onload = init();
	var i;
	var strToTest;

	function init(){
		i ='';
		strToTest='';
	}

	function regExField(){
		i = document.getElementById("regExInput").value;

		testRegEx();
	}

	function codeField(){
		strToTest = document.getElementById("regExCode").value;
		document.getElementById("output").innerHTML = strToTest;
		testRegEx();
	}
	function checkModifier(modifier){
		var patt = new RegExp("([a-fhj-ln-z\d\WA-Z])|([\W\w\d]{4})|(g{2}|m{2}|i{2})");
		var res = patt.test(modifier);
		if(res==true){
			document.getElementById('modifierError').innerHTML = "INVALID MODIFIER";
			return(false);
		}
		if(res==false){
			document.getElementById('modifierError').innerHTML = "";
			return(true);
		}
	}
	function checkRegEx(regEx){
		//unterminatedGroup
		var patt = new RegExp(/\((?!(.*\)))/);
		var res = patt.test(regEx);
		if(res){
			//alert();
			displayError("unterminatedGroup");
			return false;
		}
		if(res==false){
			displayError("noError");
		}
		
		return true;
		
	}

	function testRegEx(){
		var regExInput = document.getElementById('regExInput').value;
		var modifier = document.getElementById('modifierInput').value;
		if((checkModifier(modifier)==true)&&(checkRegEx(regExInput))==true){
			var i = new RegExp(regExInput,modifier);
			var y = strToTest.replace(i, 'rgx8r0pen$&rgx8rcl0se' );
			y = y.replace(/&/g,'&amp;');
			y = y.replace(/</g,'&lt;').replace(/>/g,'&gt;');
			y = y.replace(/rgx8r0pen/g,'<span id="regExHigh">').replace(/rgx8rcl0se/g,'</span>');
			document.getElementById("output").innerHTML = y;
			document.getElementById('regExCode').value = strToTest;
			document.getElementById('error').innerHTML = '';
		}	
	}

	function showKey(){
		var foo = document.getElementById('helpButton').innerHTML;
		if(foo=='HELP'){
			document.getElementById('sidebar').style.display = 'initial';
			document.getElementById('helpButton').innerHTML = 'HIDE';
		}
		if(foo=='HIDE'){
			document.getElementById('sidebar').style.display = 'none';
			document.getElementById('helpButton').innerHTML = 'HELP';
		}
	}

	function displayError(error){
		switch (error){
			case "unterminatedGroup":
				document.getElementById('error').innerHTML = 'unterminated group';
				break;
			case "invalidRegularExpression":
				document.getElementById('error').innerHTML = '&nbsp;INVALID REGULAR EXPRESSION!';
			case "noError":
				document.getElementById('error').innerHTML = '&nbsp;';
				break;
		}

		return;
	}


	window.onerror = function() {
		//alert();
		displayError("invalidRegularExpression");
		//document.getElementById('error').innerHTML = '&nbsp;INVALID REGULAR EXPRESSION!';
	}
	