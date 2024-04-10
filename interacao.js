//calculadora

function somar() {
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;
    var resultado = document.getElementById("res");
    num1 = Number(num1)
    num2 = Number(num2)
    resu = num1 + num2
    resultado.innerHTML = (`o resultado da soma entre ${num1} + ${num2} é igual a : ${resu}`)
}
// variaveis , write e concatenação

/*var nome = window.prompt(`qual é seu nome?`)
document.write(`ola ${nome}, seu nome tem ${nome.length} letras <br>`)
document.write(`seu nome em maiusculo é ${nome.toUpperCase()}<br>`)
document.write(`seu nome em minusculo é ${nome.toLowerCase()}<br>`)*/

// organizar numeros

/*var n1 = 75.86753

n1.toFixed(2)
window.alert(n1.toFixed(2).replace(`,`,`,`))
n1.toLocaleString(`pt-BR` , {style:'currecy' , currency: "BRL"})
window.alert(n1.toFixed(2))*/