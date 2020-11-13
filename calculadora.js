
var counter= 0;

function calculadora (a) {
    var numero= "tecla_" + a;
    var x= document.getElementById(numero).innerText;
    


}
/*
var numeroInputado= document.getElementById("ola").innerText;
console.log(numeroInputado)
numeroInputado.addEventListener("click", soma)

function soma () {
    counter += numeroInputado
}


function soma1(){
    var picha = document.getElementById("adeus").innerHTML;
    picha = "5"
}


document.getElementById("tecla_1").addEventListener("click", seleciona);
var teclaUm = document.getElementById("tecla_1").innerText;
var counter=0;


function seleciona(){
    document.getElementById("resultado").innerText= teclaUm;
}
    

function soma(){
    var cona= counter.toString();
    cu.innerText= cona;
    counter++

}


var mostrador= document.getElementById("mostra");

var teclaUm = document.getElementById("tecla_1");
 
teclaUm.addEventListener("click", mostra);

var arr= "";
*/
function mostra(a){
    var id= "tecla_" + a;
    var resultado= document.getElementById(id).innerText;
    mostrador = mostrador + resultado;
    console.log(mostrador)
    
}


var mostrador= document.getElementById("mostra").innerText;

// 10 significa soma
//20 significa subtração
//30 significa multiplicação
//40 significa divisão

function conta(x) {
    var id2= "tecla_" + x;
    var operador= document.getElementById(id2).innerText;
    mostrador= mostrador +operador;
    console.log(mostrador)
}
function final(){
    if (mostrador[1] == "+"){
    var res= Number(mostrador[0]) + Number(mostrador[2]);
    } else if (mostrador[1]== "-"){
        var res= Number(mostrador[0]) - Number(mostrador[2]);
    } else if (mostrador[1] == "x"){
        var res= Number(mostrador[0]) * Number(mostrador[2]);
    } else if (mostrador[1] == "/"){
        var res= Number(mostrador[0]) / Number(mostrador[2]);
    }
    console.log(res)
    mostrador= "";
}
