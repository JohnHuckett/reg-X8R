
window.onload = init();
	var i;
	var v;
	var y;
	function init(){
		i ='';
		x='';
	}
	function regExField(){
		i = document.getElementById("regExInput").value;
		testRegEx();
	}
	function codeField(){
		x = document.getElementById("regExCode").value;
		document.getElementById("output").innerHTML = x;
		testRegEx();
	}
	function testRegEx(){
		var modifier = document.getElementById('modifierInput').value;
		var regExInput = document.getElementById('regExInput').value;
		var i = new RegExp(regExInput,modifier);
		y = x.replace(i, 'rgx8r0pen$&rgx8rcl0se' );
		y = y.replace(/&/g,'&amp;');
		y = y.replace(/</g,'&lt;').replace(/>/g,'&gt;');
		y = y.replace(/rgx8r0pen/g,'<span id="regExHigh">').replace(/rgx8rcl0se/g,'</span>');
		document.getElementById("output").innerHTML = y;
		document.getElementById('regExCode').value=x;	
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
