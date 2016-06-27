window.onload = function() {
	
	var body = document.querySelector('body');
	var turns = 0;
	var playerText = body.querySelector('.playerTurn');
	var globalBoard = [];
	
	function FullBoard() {
		this.gameBoard = [];
		this.resetButton = body.querySelector('.reset');
	}

	FullBoard.prototype = {
		start: function() {
			this.makeGameBoard();
			this.clickChecker();
			this.resetChecker();
		},
		makeGameBoard: function() {
			for (var i=0; i<9; i++) {
				var box = body.querySelectorAll('.square')[i];
				this.gameBoard.push(box);
			}
			globalBoard = this.gameBoard;
		},
		clickChecker: function() {
			for (var i=0; i<9; i++) {
				this.gameBoard[i].addEventListener('click', function() {
				var whichBox = this;
				playerMove(whichBox);
				console.log(whichBox);
				});
			}
		},
		resetChecker: function() {
			this.resetButton.addEventListener("click", resetGame);
		}
	};	

	new FullBoard().start();
	
	

	function playerMove(whichBox) {
		var currentBox = whichBox;
		if (currentBox.innerHTML.length === 0) {	
			if (turns%2 === 0) {
				var X = document.createElement('p');
				X.setAttribute('id', 'theX');
				X.setAttribute('class', 'XorO');
				X.textContent = 'X';
				currentBox.appendChild(X);
				playerText.textContent = "Player 2: Your Turn!"; 
				playerText.setAttribute('class', 'player2');
			} else if (turns%2 !== 0) {
				var O = document.createElement('p');
				O.setAttribute('id', 'theO');
				O.setAttribute('class', 'XorO');
				O.textContent = 'O';
				currentBox.appendChild(O);
				playerText.textContent = "Player 1: Your Turn!";
				playerText.setAttribute('class', 'player1');
			}
			turns++;
			console.log(turns);
		}
	}


	
	
	function resetGame() {
		for(var i = 0; i < 9; i++) {
			globalBoard[i].innerHTML = "";
		}
	playerText.textContent = "Player 1: Your Turn!";
		playerText.setAttribute('class', 'player1');
		turns = 0;
	}
	
};

var byline = document.getElementById('byline');     
bylineText = byline.innerHTML;                                      
bylineArr = bylineText.split('');                                 
byline.innerHTML = '';                                                      

var span;                   
var letter;

for(i=0;i<bylineArr.length;i++){                                 
  span = document.createElement("span");                    
  letter = document.createTextNode(bylineArr[i]);   
  if(bylineArr[i] == ' ') {                                       
    byline.appendChild(letter);              
  } else {
        span.appendChild(letter);                      
    byline.appendChild(span);               
  }
}

