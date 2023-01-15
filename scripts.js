// document.getElementById("container").innerHTML = "conteudo";
// document.getElementById("container").innerHTML = "outra coisa";

let container = document.getElementById("container");

//let maças = 2;
//let banana = 3;
//let soma = maças + banana;
//container.innerHTML= soma;

//container.innerHTML = "uma coisa";
//container.append("outra coisa");

// let texto = "Meu nome é ";
// let nome = "Luccas Vieira";
// let soma = texto + nome;

// container.innerHTML = soma;

//const NASCIMENTO = " 21/02/1991";
//let nome = "Luccas Vieira";

//container.innerHTML = nome + NASCIMENTO;

function somar()
{
    let v1 = Number(valor1.value);
    let v2 = Number(valor2.value);
    document.getElementById("resultado").innerHTML = v1 + v2;
}
function subtrair()
{
    let v1 = Number(valor1.value);
    let v2 = Number(valor2.value);
    document.getElementById("resultado").innerHTML = v1 - v2;
}
function dividir()
{
    let v1 = Number(valor1.value);
    let v2 = Number(valor2.value);
    document.getElementById("resultado").innerHTML = v1 / v2;
}
function multiplicar()
{
    let v1 = Number(valor1.value);
    let v2 = Number(valor2.value);
    document.getElementById("resultado").innerHTML = v1 * v2;
}