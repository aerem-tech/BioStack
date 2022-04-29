function calculate() {
	n1 = document.getElementById('num1').value;
	n2 = document.getElementById("innoculum").value = (n1 * 0.1);
	n3 = (n1 - n2);
	n4 = n3 * 0.01
	n5 = document.getElementById("micro").value = (Math.round((n4 * 0.25)*100)/100.0);
	n6 = document.getElementById("dw1").value = (Math.round((n4 - n5)*100)/100.0);
	n7 = n3 * 0.99;
	n8 = document.getElementById("macro").value = (Math.round((n7 * 0.25)*100)/100.0);
	n9 = document.getElementById("dw2").value = (Math.round((n7 - n8)*100)/100.0);
}

function macrocalculate() {
	a1 = document.getElementById('num2').value;
	a2 = document.getElementById("ammonium").value = (Math.round(a1 * 0.024));
	a3 = document.getElementById("sodium").value = (Math.round(a1 * 6));
	a4 = document.getElementById("mg").value = (Math.round(a1 * 0.3));
	a5 = document.getElementById("ca").value = (Math.round(a1 * 0.144));
	a6 = document.getElementById("citric").value = (Math.round(a1 * 0.024));
	a7 = document.getElementById("k2").value = (Math.round(a1 * 0.16));
	a8 = document.getElementById("na").value = (Math.round(a1 * 0.08));
	a9 = document.getElementById("edta").value = (Math.round(a1 * 0.024));
}
