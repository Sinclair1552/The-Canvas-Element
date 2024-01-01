 //First Challenge: Snowman challenge ch 13 pg. 214
 var canvas = document.getElementById("canvas");
 var ctx = canvas.getContext("2d");
 ctx.lineWidth = 3;

 var circle = function (x, y, radius, fillCircle) {
     ctx.beginPath();
     ctx.arc(x, y, radius, 0, Math.PI * 2, false);
     if (fillCircle) {
         ctx.fill();
     } else {
         ctx.stroke();
     }
 };

 var drawSnowman = function (x, y) {
     ctx.fillStyle = "Green";
     ctx.lineWidth = 4;

     circle(x + 50, y + 110, 40, false);
     circle(x + 50, y + 40, 30, false);
     circle(x + 40, y + 35, 5, true);
     circle(x + 60, y + 35, 5, true);

     circle(x + 50, y + 90, 5, true);
     circle(x + 50, y + 110, 5, true);
     circle(x + 50, y + 130, 5, true);

     ctx.fillStyle = "Red"
     circle(x + 50, y + 45, 5, true);
 };

 console.log(drawSnowman(0, 0));
 console.log(drawSnowman(100, 20));

 //Second Challenge: Drawing an array of points challenge ch. 13 pg 215
 var drawPoints = function (points) {
     ctx.beginPath()
     ctx.moveTo(points[0][0], points[0][1]);
     for (var i = 1; i < points.length; i++) {
         ctx.lineTo(points[i][0], points[i][1]);
     }
     ctx.stroke();
 };

 var mysteryPoints = [[50, 50], [50, 100], [25, 120], [100, 50], [70, 90], [100, 90], [70, 120]];
 console.log(drawPoints(mysteryPoints));

 //Third Challenege: Painting with your mouse challenge ch. 13 pg. 215
 var circle = function (x, y, radius, fillCircle) {
     ctx.beginPath();
     ctx.arc(x, y, radius, 0, Math.PI * 2, false);
     if (fillCircle) {
         ctx.fill();
     } else {
         ctx.stroke();
     }
 };

 $('canvas').mousemove(function (event) {
     circle(event.offsetX, event.offsetY, 3, true);
 });

 //Drawing the man in hangman
 var pickWord = function () {
var words = [
 "creep",
 "sloth",
 "orange",
 "brownie"
];

return words[Math.floor(Math.random() * words.length)];
};

var setupAnswerArray = function (word) {
var answerArray = [];
for (var i = 0; i < word.length; i++) {
 answerArray[i] = "_";
}

return answerArray;
};

var showPlayerProgress = function (answerArray) {
alert(answerArray.join(" "));
};

var getGuess = function () {
return prompt("Guess a letter, or click Cancel to stop playing.");
};

var updateGameState = function (guess, word, answerArray) {
var appearances = 0;
for (var j = 0; j < word.length; j++) {
 if (word[j] === guess) {
   answerArray[j] = guess;
   appearances++;
 }
}

return appearances;
};

var showAnswerAndCongratulatePlayer = function (answerArray) {
showPlayerProgress(answerArray);
alert("Good job! The answer was " + answerArray.join(""));
};

var drawSegment = function (incorrectGuesses) {
ctx.lineWidth = 4;

if (incorrectGuesses === 0) {
 ctx.strokeRect(20, 20, 20, 20);
} else if (incorrectGuesses === 1) {
 ctx.beginPath();
 ctx.moveTo(30, 40);
 ctx.lineTo(30, 80);
 ctx.stroke();
} else if (incorrectGuesses === 2) {
 ctx.beginPath();
 ctx.moveTo(30, 80);
 ctx.lineTo(10, 110);
 ctx.stroke();
} else if (incorrectGuesses === 3) {
 ctx.beginPath();
 ctx.moveTo(30, 80);
 ctx.lineTo(50, 110);
 ctx.stroke();
} else if (incorrectGuesses === 4) {
 ctx.beginPath();
 ctx.moveTo(30, 60);
 ctx.lineTo(10, 50);
 ctx.stroke();
} else if (incorrectGuesses === 5) {
 ctx.beginPath();
 ctx.moveTo(30, 60);
 ctx.lineTo(50, 50);
 ctx.stroke();
}
};

var word = pickWord();
var answerArray = setupAnswerArray(word);
var remainingLetters = word.length;
var incorrectGuesses = 0;

while (remainingLetters > 0) { showPlayerProgress(answerArray); var guess = getGuess();
if (guess === null) {
 break;
} else if (guess.length !== 1) {
 alert("Please enter a single letter.");
} else {
 var correctGuesses = updateGameState(guess, word, answerArray);

 remainingLetters -= correctGuesses;

 if (correctGuesses === 0) {
   drawSegment(incorrectGuesses);
   incorrectGuesses++;
 }
}
}

showAnswerAndCongratulatePlayer(answerArray);