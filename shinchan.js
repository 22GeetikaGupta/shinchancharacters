function myFunction() {
	
	var x = document.getElementById("val").value;
	
	var y = document.getElementsByClassName("image");
	
	
	for(var i = 0; i < y.length; i++) {
		
		var z = y[i].getElementsByClassName("nam");


		
		 if(x === z[0].innerHTML) {
		 	var s = y[i].getElementsByClassName("abc")[0].src;
		 	document.getElementById("ab").innerHTML = "";
		 	var m = new Image(200,200);
		 	m.src = s;
		 	document.body.appendChild(m);
		 }
	}
}		
