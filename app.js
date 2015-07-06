document.write("<h1>Welcome to Mada's World</h1><br>");

var x = 0;
var y = 0;

var enter = prompt("Gimmi a numba");
enter = parseInt(enter);
//enter = parseFloat(enter);
enter = Math.floor(enter);
y = +enter;
console.log(y);


for (x=0; x <= y; x++) {

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

