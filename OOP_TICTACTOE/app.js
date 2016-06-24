
function TicTacToeGame(Gameboard, GameSquares, Player, Marker, Score, Reset) {
  this.gameboard= gameboard;
  this.gameSquares=gameSquares;
  this.players=players;
  this.marker=marker;
  this.winner=winner;
  this.reset=reset;
}


function Player (name, marker); {
Player.prototype.marker='marker';
Player.prototype.name = 'name';
}


var PlayerOne = new Player('Player X', 'X');
var PlayerTwo = new Player('Player O', 'O');


$(markerX).on('click', function(){
  $(markerX).removeClass('active');
  $(this).addClass('active');
});

$(markerO).on('click', function(){
  $(markerO).removeClass('active');
  $(this).addClass('active');
});


function Gameboard (boardSize, squareSize, numOfRows, numOfColumns, numOfSquares, empty, winningCombos, possCombos) {
  Gameboard.prototype.boardSize = 300;
   Gameboard.prototype.squareSize = 100;
   Gameboard.prototype.numOfRows = 3;
   Gameboard.prototype.numOfSquares= 9;
   Gameboard.prototype.empty= true;
   Gameboard.prototype.winningCombos= ['a1b2c3', 'd435f6', 'g7h8i9', 'a1d4g7', 'b2e5h8', 'c3f6i9', 'a1e5i9', 'g7e5c3'];
  //add an [] of winning game combos by assignining each square a unique number and doing math to calculate the sum for winning square combos
//there are 8 winning combos
}
//winning combos:
//leftvertcolumn(3-in-a-row)

 function ClickSquare (makeYourMove) {
  clickSquare.prototype.makeYourMove = true;
 }


$('.box').click(function() {
  var tally = oneClick ++;
  if ( tally % 2 === 0 ) {
    if ( $(this).children('.o').hasClass('active')){
      oneClick --;
    } else {
      $(this).children('.x').addClass('active');
    }
  } else {
    if ( $(this).children('.x').hasClass('active')){
      oneClick --;
    } else {
      $(this).children('.o').addClass('active');
    }
  }




var ResetGame  = new TicTacToeGame();

$('.js-wins, .reset').on('click', function(){
  $('.js-wins').removeClass('active');
  $('.x').removeClass('active');
  $('.o').removeClass('active');
  $('.red-line').removeClass('active');
}

 oneClick.prototype = {
    click: function() {
  
    }
 }



