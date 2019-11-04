// desenhar calculadora
// pegar valor do click em um botão
// adicionar click ao final de string
// mostrar a string atualizada após cada click
// executar o cálculo

//inicia variaveis
var str_calc = "";
var visor = document.getElementById("visor");

visor.innerHTML = str_calc;

function capture (str) {
    str_calc = str_calc + str;
	console.log(str_calc);
    visor.innerHTML = str_calc;
}

function capture_bk (str) {
    str_calc = str_calc + str;
    console.log(str_calc);
    visor.innerHTML = str_calc;
}

function capture_ce (str) {
    str_calc = 0;
    console.log(str_calc);
    visor.innerHTML = str_calc;
}

function capture_eq (str) {
    str_calc = str_calc + str;
    console.log(str_calc);
    visor.innerHTML = str_calc;
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
