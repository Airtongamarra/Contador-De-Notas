/*Faça um algoritmo que lê um valor inteiro de reais e calcula o menor valor possível de
notas de 100, 50, 10, 5 e 1 que o valor lido pode ser decomposto. Exiba o valor lido e a
decomposição. Ex.: 576 // 5 nota(s) de 100 1 nota(s) de 50 2 notas(s) de 10 1
nota(s) de 5 1 nota(s) de 1*/


var valorTotal = parseInt(prompt(" Insira um valor real "))

var notasDeCem
notasDeCem = Math.floor(valorTotal / 100)
valorTotal = valorTotal - (100 * notasDeCem)

var notasDeCinquenta
notasDeCinquenta = Math.floor(valorTotal / 50)
valorTotal = valorTotal - (50 * notasDeCinquenta)

var notasDeDez
notasDeDez = Math.floor(valorTotal / 10)
valorTotal = valorTotal - (10 * notasDeDez)

var notasDeCinco
notasDeCinco = Math.floor(valorTotal / 5)
valorTotal = valorTotal - (5 * notasDeCinco)

var notasDeUm
notasDeUm = Math.floor(valorTotal / 1)
valorTotal = valorTotal - (1 * notasDeUm)

console.log (" Notas de cem: ", notasDeCem, " Notas de cinquenta: ", notasDeCinquenta, " Notas de dez: ", notasDeDez, " Notas de um:", notasDeUm  )