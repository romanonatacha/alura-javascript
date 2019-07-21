var title = document.querySelector(".title");

title.textContent = "Aparecida Nutricionista";

var patient = document.querySelector("#first-patient");

var tdPeso = patient.querySelector(".info-peso");
var tdAltura = patient.querySelector(".info-altura");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var tdImc = patient.querySelector(".info-imc");

var alturaEhValida = true;
var pesoEhValido = true;

if(peso <= 0 || peso > 1000){
    console.log("Peso inválido");
    tdImc.textContent = "Peso inválido!";
    pesoEhValido  = false;
}

if(altura <= 0 || altura >= 3){
    console.log("Altura inválida");
    tdImc.textContent = "Altura inválida!";
    alturaEhValida = false;
}

if (alturaEhValida && pesoEhValido) {

    var imc = peso / (altura * altura);
    tdImc.textContent = imc;    
} else {
    tdImc.textContent = "Altura e/ou peso inválidos!"
}
