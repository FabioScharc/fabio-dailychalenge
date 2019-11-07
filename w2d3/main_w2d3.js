var arr = [5,0,9,1,7,4,2,6,3,8];
var length = arr.length;
console.log(arr.toString());
var temp = 0;

//compara com a posição adjacente posterior
for (i=0; i<length; i++) {
	for (n=0; n<length-i-1; n++) {
		if (arr[n] <= arr[n+1]) {
			temp = arr[n];
			arr[n] = arr[n+1];
			arr[n+1] = temp;
		}		
	}	
}
console.log(arr);
