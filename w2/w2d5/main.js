// 96 bottles of beer on the wall
// 96 bottles of beer
// Take n down, pass them/it around
// 93 bottles of beer on the wall
// no more bottles of beer on the wall


function bottle(n) {
	let number = prompt ("How many bottles of bear do you want to drink?");
	let iteration = 1;
	while (number>=1) {
			console.log(number + " bottles of beer on the wall");
			console.log(number + " bottles of beer");
			if (iteration > 1) {
				if (number-iteration<0){
					console.log("I won't pass "+ number + " around....I will drink it!!! Cheers!!!");
				// } else if (number-iteration==0){
				// 	console.log("No more bottles of beer on the wall");
				// } 
				else {
					console.log("Take " + iteration + " down, pass them around");
				}
			} else {
				console.log("Take " + iteration + " down, pass it around");		
			}
			if (number-iteration==0){
				console.log("No more bottles of beer on the wall");
			 } else {
				console.log(number-iteration + " bottles of beer  on the wall");
				}	
			console.log(number-iteration);
			number -= iteration;
			iteration++;
	}
}


