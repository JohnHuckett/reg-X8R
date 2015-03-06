
window.onload = init();
	var i;
	var v;
	var y;
	function init(){
		i ='';
		x='';
	}
	function regExField(){
		i = document.getElementById("regExInput").innerHTML;
		console.log("regex " + i);
		testRegEx();
	}
	function codeField(){
		x = document.getElementById("regExCode").innerHTML;
		console.log("code field " + x);
		testRegEx();
	}
	function testRegEx(){
		var foo = document.getElementById('regExInput').value;
		var i = new RegExp(foo,"g");
		
		x = document.getElementById('regExCode').innerHTML;
		//y = document.getElementById('output').value;
		//document.getElementById('output').innerHTML = x;
		//y =x;
		x = x.replace(i, '<span id="highlight">&$</span>' )
		//y = x.replace(/fish/, '<span id="highlight">&$</span>' )
		//console.log('i = '+i);
		//console.log('x = '+x);
		document.getElementById('regExCode').value=x;
	}