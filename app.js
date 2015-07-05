document.write("<h1>Welcome to Mada's World</h1><br>");

var x = 0;

for (x=0; x <= 100; x++) {

	if ( x % 3 == 0 ) {
		document.write("fizz<br>");
	} else if ( x % 5 == 0 ) {
		document.write("buzz<br>");
	} else if ( x % 3 == 0 && x % 5 == 0) {
		document.write("fizzbuzz<br>");
	} else {
		document.write(x + "<br>");
	}

	
}

