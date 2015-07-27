var celsius = document.getElementById("celsius").value;
var fahrenheit = document.getElementById("fahrenheit").value;

function convert(degree) {

	if (degree == "CtoF") {

		FtoC = document.getElementById("celsius").value * 9 / 5 + 32;
		document.getElementById("fahrenheit").value = FtoC;

	}

	else {

		CtoF = (document.getElementById("fahrenheit").value - 32) * 5 / 9;
		document.getElementById("celsius").value = CtoF;

	}
}