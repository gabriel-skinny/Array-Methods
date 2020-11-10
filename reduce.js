
Array.prototype.myReduce = function(callback, valorIncial){
  let valorFinal = typeof valorIncial !== undefined ? valorIncial : this[0]

  for(index in this){
    valorFinal = callback(valorFinal, this[index], this)

  }

  return valorFinal;
} 


let teste = [1, 2, 3, 909]


var resultadoTeste = teste.myReduce((anterior, proximo) =>  anterior + proximo, 0)

console.log(resultadoTeste)