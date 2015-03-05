window.onload = init();
	var i;
	var v;
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
		//console.log("code field " + x);
		testRegEx();
	}
	function testRegEx(){
		console.log('i = '+i);
		console.log('x = '+x);
	}