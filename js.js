// task 1
document.getElementById('inpString').onkeypress = function(a){
	var inp = document.getElementById('inpString');
	var out = document.getElementById('outString');
	if (a.keyCode == 13) out.innerHTML = 'length line ' + inp.value.length;
}

// task 2
var mas = ['1.png', '2.png', '3.png', '4.png', '5.png'];
var imgOut = document.getElementById('imgOut');
for (var i = 0; i < mas.length; i++){
	imgOut.innerHTML += '<img src="' + mas[i] + '">';
}

//task 3
document.getElementById('inpSite').onkeypress = function (b) {
	var inp = document.getElementById('inpSite');
	var out = document.getElementById('outSite');
	if (b.keyCode == 13) {
		out.innerHTML = siteName(inp.value);
	}
}

function siteName(fullAddress){
	var siteName = '';
	for (var i = 0; i < fullAddress.length; i++){
		if (fullAddress.charAt(i) == '/' && fullAddress.charAt(i+1) == '/') {
			for (var j = i+2; fullAddress.charAt(j) != ''; j++){
				siteName += fullAddress.charAt(j);
			}
		}
	}
	return siteName;
}

// task 4
document.getElementById('inpSiteA').onkeypress = function (c) {
	var inp = document.getElementById('inpSiteA');
	var out = document.getElementById('outSiteA');
	if (c.keyCode == 13) {
		out.innerHTML = siteNameA(inp.value);
	}
}

function siteNameA(fullAddress){
	var siteName;
	if (fullAddress.slice(0, 11) == 'http://www.') siteName = fullAddress.slice(11);
	else if (fullAddress.slice(0, 12) == 'https://www.') siteName = fullAddress.slice(12);
	else if (fullAddress.slice(0, 7) == 'http://') siteName = fullAddress.slice(7);
	else if (fullAddress.slice(0, 8) == 'https://') siteName = fullAddress.slice(8);
	return siteName;
}


//  task 5
function formCheck (lastName, pass, mail) {
	// if (ifSpace(name)) return true;
	if (ifSpace(lastName)&&ifSpace(pass)&&ifLessThanFive(pass)&&mailVerif(mail)) return true;
	else return false;
}

function ifSpace (arg) {
	if (arg.indexOf(' ', 0) == 0 || arg.lastIndexOf(' ') == arg.length-1) return false;
	else return true;
}

function ifLessThanFive (arg) {
	if (arg.length < 5) return false;
	else return true;
}

function mailVerif (arg) {
	var count = 0;
	var start = arg.indexOf('@', 0);
	while (start !== -1){
		count++;
		start = arg.indexOf('@', start+1);
	}
	if (count != 1 || arg.indexOf(' ', 0) !== -1) return false;
	else return true;
}

document.getElementById('checkForm').onclick = function() {
	
	var lastName = document.getElementById('userLastname').value;
	var pass = document.getElementById('pass').value;
	var mail = document.getElementById('mail').value;
	console.log(formCheck(lastName, pass, mail));
	formCheck(lastName, pass, mail);
}


// task 6

document.getElementById('symb').onkeypress = function (a) {	
	document.getElementById('symCode').innerHTML = a.keyCode;
	document.getElementById('symb').value = '';
	console.log(a);
}















