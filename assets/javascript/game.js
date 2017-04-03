	//q for TA's to ask on the next lesson 
	//1.how to make function avoid repeats in writing reset function or how could I write it more efficiently
	//2.Why I can't redeclare new var in a functions
	//3.Is there any other way not to write cAll = c1 + c2 + c3 + c4 when getting elements by id 

	var wins = 0;
	var losses = 0;


	var	c1 = 0;  // Numbers represent the sum of clicked points for each one of four crystal buttons 
	var	c2 = 0;
	var	c3 = 0;
	var	c4 = 0;

	var	cAll = c1 + c2 + c3 + c4;

	var mainNum = Math.floor((Math.random() * 102) + 19);  // Random original numbers for Random Number and 4 crystals
	console.log(mainNum);

	var cry1 = Math.floor((Math.random() * 12) + 1);
	console.log(cry1);
	
	var cry2 = Math.floor((Math.random() * 12) + 1);
	console.log(cry2);
	
	var cry3 = Math.floor((Math.random() * 12) + 1);
	console.log(cry3);
	
	var cry4 = Math.floor((Math.random() * 12) + 1);
	console.log(cry4);

	$("#main_number").html("<p>Random number: " + mainNum + "</p>");  //Embeds generated number into Random number

	
	function reset() {  // I make this function separate from the above ramndom numbers because because this is the only way how I made it work. BTW it resets random numbers.

			mainNum = Math.floor((Math.random() * 102) + 19);
			console.log(mainNum);

			cry1 = Math.floor((Math.random() * 12) + 1);
			console.log(cry1);
	
			cry2 = Math.floor((Math.random() * 12) + 1);
			console.log(cry2);
	
			cry3 = Math.floor((Math.random() * 12) + 1);
			console.log(cry3);
	
			cry4 = Math.floor((Math.random() * 12) + 1);
			console.log(cry4);

			$("#main_number").html("<p>Random number: " + mainNum + "</p>");

	}



	function winLose() { //Function responsible for adding losses and wins and resetting random numbers.
		if (cAll > mainNum) {
			losses++;
			$("#losses").html("<p>Losses :" + losses + "</p>");
			c1 = 0;
			c2 = 0;
			c3 = 0;
			c4 = 0;
			cAll = c1 + c2 + c3 + c4;
			console.log("cAll value is :" + cAll);
			reset();

		}

		if (cAll === mainNum) {
			wins++;
			$("#wins").html("<p>Wins :" + wins + "</p>");
			c1 = 0;
			c2 = 0;
			c3 = 0;
			c4 = 0;
			cAll = c1 + c2 + c3 + c4;
			console.log("cAll value is :" + cAll);
			reset();

		} 
	}


	$("#cr1").on("click", function() { // First crystal button

		c1 = c1 + cry1;

		cAll = c1 + c2 + c3 + c4;

		winLose();
		
		$("#total-score").html("<p>Your total score:" + cAll + "</p>");		

    });

   	$("#cr2").on("click", function() {  // Second crystal button

		c2 = c2 + cry2;

		cAll = c1 + c2 + c3 + c4;

		winLose();
		
		$("#total-score").html("<p>Your total score:" + cAll + "</p>");

    });

    $("#cr3").on("click", function() {  // Third crystal button

		c3 = c3 + cry3;

		cAll = c1 + c2 + c3 + c4;

		winLose();
		
		$("#total-score").html("<p>Your total score:" + cAll + "</p>");
		
    });

    $("#cr4").on("click", function() {   // Fourth crystal button

		c4 = c4 + cry4;

		cAll = c1 + c2 + c3 + c4;

		winLose();
		
		$("#total-score").html("<p>Your total score:" + cAll + "</p>");

    });
