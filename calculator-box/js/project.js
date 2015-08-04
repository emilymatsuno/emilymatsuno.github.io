document.getElementById('red').onclick = changeRed;
document.getElementById('blue').onclick = changeBlue;
document.getElementById('a10').onclick = add10;
document.getElementById('a20').onclick = add20;
document.getElementById('a30').onclick = add30;
document.getElementById('n10').onclick = sub10;
document.getElementById('n20').onclick = sub20;
document.getElementById('n30').onclick = sub30;
var out = 0;

function changeRed() {
	document.getElementById('out').style.backgroundColor = "#e74c3c";
};

function changeBlue() {
	document.getElementById('out').style.backgroundColor = "#3498db";
};

function add10() {
	out = out + 10;
	document.getElementById('out').innerHTML = out;
}

function add20() {
	out = out + 20;
	document.getElementById('out').innerHTML = out;
}

function add30() {
	out = out + 30;
	document.getElementById('out').innerHTML = out;
}

function sub10() {
	out = out - 10;
	document.getElementById('out').innerHTML = out;
}

function sub20() {
	out = out - 20;
	document.getElementById('out').innerHTML = out;
}

function sub30() {
	out = out - 30;
	document.getElementById('out').innerHTML = out;
}

window.addEventListener('mouseup', function(event) {
	var box = document.getElementById('out');
	if (event.target != box) {
		box.style.backgroundColor = "white";
	}
});