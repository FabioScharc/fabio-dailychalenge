var num1 = []
var num2 = []
var operation = ""

function capture (str) {
	num1 = getElementByID.value (str)
	console.log(num1);
}

function add (x,y) {
	return (x+y);
}

function subt (x,y) {
	return (x-y);
}

function multi (x,y) {
	return (x*y);
}

function divide (x,y) {
	if (y==0) {
		return "Erro, divisão por zero";
	} else {
		return (x/y);name="button"
	} 
}

function setOperation(operator){
    if(operator == "+"){
        calculo.funcaoParaCalcular = somarValores;
    } 
    if(operator == "-"){
        calculo.funcaoParaCalcular = subtrairValores;
    }
    if(operator == "*"){
        calculo.funcaoParaCalcular = multiplcarValores;
    }
    if(operator == "/"){
        calculo.funcaoParaCalcular = dividirValores;
    } 
}




function limparDados(){
    inputResultado.value = "";

    calculo.primeiroValor = 0;
    calculo.segundoValor = 0;
    calculo.funcaoParaCalcular = null;
}
