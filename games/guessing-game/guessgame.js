// JavaScript Document

var elOutput = document.getElementById('output');

function generateNumberToGuess() {
	elOutput = document.getElementById('output');
	numberToGuess = Math.floor(Math.random() * 1000) + 1;
	elOutput.innerHTML = '';
	elOutput.style.display = "none";
	cheatBox.checked = false;
}

function showNumberToGuess() {
	
	var thecheat = document.getElementById('numberToGuess');
	var cheatBox = document.getElementById('myCheck');
	var cheat = document.getElementById('text');
	
	if (cheatBox.checked == true) {
		cheat.style.display = "block";
		cheat.textContent = 'The number to guess is: ' + numberToGuess;
	} else {
		cheat.style.display = "none";
		cheat.textContent = '';
	}
	
}

function showGuesses() {
	elOutput.innerHTML += ''
}

function yourGuess() {
	
	var elGuess = document.getElementById('guess');
	var elOutput = document.getElementById('output');
	
	elOutput.style.display = "block";
	
	if (elGuess.value == numberToGuess) {
		elOutput.innerHTML += '<br>You guessed the number correctly! Which was: ' + numberToGuess + '&nbsp;&nbsp;<img src="https://diaryofdaedalus.files.wordpress.com/2017/05/okay-pepe-meme.jpg" width="20" height="20" /><br><br>'
	}
	
	if (elGuess.value < numberToGuess) {
		elOutput.innerHTML += '<br>You guessed incorrectly. The number is more. <img src="https://i.pinimg.com/originals/7c/0d/c9/7c0dc9155b6dfbc784dc1faf45a20afc.png" width="16" height="16" /><br><br>'
	}
	
	if (elGuess.value > numberToGuess) {
		elOutput.innerHTML += '<br>You guessed incorrectly. The number is less. <img src="https://i.pinimg.com/originals/7c/0d/c9/7c0dc9155b6dfbc784dc1faf45a20afc.png" width="16" height="16" /><br><br>' 
	}
	
	
    // You can store references to the value and the
    // guesses textarea in local function variables.

}

window.onload = function(){
    generateNumberToGuess();
}
