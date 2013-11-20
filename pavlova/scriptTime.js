function getTime() {
	var interval = setInterval(sayTime, 10000);
}

function sayTime() {
	var cur = new Date();

	alert(cur.getHours() + ':' + cur.getMinutes() + ' ' + cur.getDay() + '.' + cur.getMonth() + ' ' + cur.getYear() + 'года');
}

getTime();
