var array = ["Banana","Apples", "Oranges", "Blueberries"];

array.splice (array.indexOf("Banana"),1);

array.sort();

array.push("Kiwi");

array.splice (array.indexOf("Apples"),1);

array.reverse();

console.log (array);