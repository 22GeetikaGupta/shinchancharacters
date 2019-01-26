function myFunction() {
	
	var x = document.getElementById("val").value;
	console.log(x);
	
	var y = document.getElementsByClassName("image");	
	
	
	for(var i = 0; i < y.length; i++) {
		
		var z = y[i].getElementsByClassName("nam");

            
		 if(x === z[0].innerHTML) {
		 	 	y[i].style.display = "block";
		 	}

        else if(x.length === 0) {
        	var m = document.getElementsByClassName("image");

                for(var j=0; j < m.length; j++){
                  m[j].style.display = "block";
            }
        }

        else {
        	y[i].style.display = "none";
        }
	}

}		
