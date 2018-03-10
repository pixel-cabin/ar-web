function showMore() {
	var thecheat = document.getElementById('numberToGuess');
	var cheatBox = document.getElementById('myCheck');
	var bestshowmore = document.getElementById('best-text');
	
	if (cheatBox.checked == true) {
		cheat.style.display = "block";
		cheat.textContent = 'The number to guess is: ' + numberToGuess;
	} else {
		cheat.style.display = "none";
		cheat.textContent = '';
	}