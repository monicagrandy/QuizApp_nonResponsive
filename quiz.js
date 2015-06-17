$(document).ready(function(){
//questions
var questions = [
				{question: "Beyonce was the lead singer of this sassy girl group before launching her solo career", 
 				answers: ["TLC", "Spice Girls", "Destiny's Child"],
 				correct: 2}, 
 				{question: "Beyonce's sister's name is",
 				answers: ["Solange", "Tina", "Karen"],
 				correct: 1},
 				{question:"Queen Bey is married to",
 				answers: ["Usher", "Dwayne Johnson", "Jay-Z"],
 				correct: 2},
 				{question: "Beyonce's most popular song to date is",
 				answers: ["Crazy in Love", "Drunk in Love", "Single Ladies"],
 				correct: 0},
 				{question: "Beyonce played this character in the movie 'Dream Girls'",
 				answers: ["Effie White", "Deena Jones", "Lorrell Robinson"],
 				correct: 1}
 				];


//initial vars
var score = 0
var correct1 = document.getElementById("r1_3");
var correct2 = document.getElementById("r2_1");
var correct3 = document.getElementById("r3_3");
var correct4 = document.getElementById("r4_1");
var correct5 = document.getElementById("r5_2");
var lowScoreReset = document.getElementById("submitLow");
var medScoreReset = document.getElementById("submitMed");


//check answer of first question
var firstAns = document.getElementById("submit1");
firstAns.onclick = function(event){
	event.preventDefault();
	if(correct1.checked == true) {
		score+=3;
		console.log("Current score = " +score);
	}
	else if(correct1.checked == false) {
		score+=0;
		console.log("Current score = " +score);
	}
	return score;

}

//check answer of second question
var secondAns = document.getElementById("submit2");
secondAns.onclick = function(event) {
	event.preventDefault();
	if(correct2.checked == true) {
		score+=3;
		console.log("Current score = " +score);
	}
	else if(correct2.checked == false) {
		score+=0;
		console.log("Current score = " +score);
	}
	return score;
}

//check answer of third question
var thirdAns = document.getElementById("submit3");
thirdAns.onclick = function(event) {
	event.preventDefault();
	if(correct3.checked == true) {
		score+=3;
		console.log("Current score = " +score);
	}
	else if(correct3.checked == false) {
		score+=0;
		console.log("Current score = " +score);
	}
	return score;
}

//check answer of fourth question
var fourthAns = document.getElementById("submit4");
fourthAns.onclick = function(event) {
	event.preventDefault();
	if(correct4.checked == true) {
		score+=3;
		console.log("Current score = " +score);
	}
	else if(correct4.checked == false) {
		score+=0;
		console.log("Current score = " +score);
	}
	return score;
}

//check answer of fifth question and get results
var fifthAns = document.getElementById("submit5");
fifthAns.onclick = function(event) {
	event.preventDefault();
	if(correct5.checked == true) {
		score+=3;
		console.log("Current score = " +score);
	}
	else if(correct5.checked == false) {
		score+=0;
		console.log("Current score = " +score);
	}
	results(score);
}

//results
function results(score){
	if(score >= 4) {
		location.href = "#high";
	}
	else if(score >= 3) {
		location.href = "#med";
	}
	else if(score < 3) {
		location.href = "#low";
	}
}

//newGame if you didn't win
lowScoreReset.onclick = function(event) {
	event.preventDefault();
	score = 0;
	uncheckAll();
} 

medScoreReset.onclick = function(event) {
	event.preventDefault();
	score = 0;
	uncheckAll();
}

//uncheck all radio boxes
function uncheckAll() {
var allInp = document.getElementsByTagName("input");
	for (i = 0; i < allInp.length; i++) {
  		if (allInp[i].type == "radio") {
    	allInp[i].checked = false;
  		}
	}
}

});







