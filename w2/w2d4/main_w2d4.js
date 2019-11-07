// Daily challenge :
// Write a function that takes a list of strings and prints them, one per line, in a rectangular frame. For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:


//var str = "Teste de quebrar em lista";
var str_html = "";

function split_array (str) {
	return array = str.split(" ");   //" " uses a space as separator 
}

function biggest (x) {
	let big=0;
	for (i of array) {
		if (i.length > big) {
			big = i.length;
		}
	}
	return big
}

function print_ln (str,big) {
	let line = "* ";
	line += str;
	line += " ".repeat(big-str.length+1);
	line += "*"
	return console.log(line)
}

function  print_all (lst) {
	let big = biggest(lst);
	console.log ("*".repeat(big+4))
	for (i of array) {
		print_ln (i,big);
	}
	console.log ("*".repeat(big+4))
}

function show () {
	lst = prompt ("Enter a phrase:");
	var array = split_array (lst);
	var content = print_all (array)
}