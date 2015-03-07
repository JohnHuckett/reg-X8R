
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
		//console.log("regex " + i);
		testRegEx();
	}
	function codeField(){
		x = document.getElementById("regExCode").value;
		document.getElementById("output").innerHTML = x;

	
		//console.log("code field " + x);
		testRegEx();
	}
	function testRegEx(){
		var modifier = document.getElementById('modifierInput').value;
		console.log(modifier);
		var foo = document.getElementById('regExInput').value;
		var i = new RegExp(foo,modifier);
		console.log(i);
		//console.log(i);
		//x = x.replace(i, '<span id="highlight">&$</span>' )
		
		y = x.replace(i, '<span style="background-color:orange">$&</span>' );
		document.getElementById("output").innerHTML = y;
		//console.log('i = '+i);
		//console.log('x = '+x);
		console.log(y);
		document.getElementById('regExCode').value=x;
		
	}
