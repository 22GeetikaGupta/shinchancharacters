function myFunction() {
	
	var x = document.getElementById("val").value;
	console.log(x);
	
	var y = document.getElementsByClassName("image");	
	
	
	for(var i = 0; i < y.length; i++) {
		
		var z = y[i].getElementsByClassName("nam");

            
<<<<<<< HEAD
		 if(z[0].innerHTML.includes(x)) {
		 	 	y[i].style.display = "block";

=======
		 if(x === z[0].innerHTML) {
		 	 	y[i].style.display = "block";
>>>>>>> 8311c544e5c849d24aa4b237cbc2c430437d2c7a
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
