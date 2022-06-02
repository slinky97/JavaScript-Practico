//Helpers
function esPar(numero){
    return (numero % 2 === 0);

}

  function calcularMedia(lista){

      const sumaLista = lista.reduce( 
          function (valorAcumulado = 0, nuevoElemento){
              return valorAcumulado + nuevoElemento;
          }
      );
      const promedioLista = sumaLista / lista.length;
      return promedioLista;
  }

// Calculadora de mediana
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const personaMitad1 =lista[mitad -1];
        const personaMitad2 =lista[mitad];

        const mediana = calcularMedia([personaMitad1, personaMitad2]);
        return mediana;
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}
 

  // Mediana general
const salariosCR = costarica.map(
    function(persona){
        return persona.salary;
    }
);

const salariosCRSorted = salariosCR.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
); 

const medianaGeneralCR = medianaSalarios(salariosCRSorted)

//Mediana del top 10%
const spliceStart = (salariosCRSorted.length * 90) / 100;
const spliceCount = salariosCRSorted.length - spliceStart;
const salariosCRTop10 = salariosCRSorted.splice(
    spliceStart,
    spliceCount,
)
const medianaTop10lCR = medianaSalarios(salariosCRTop10)

console.log(
    medianaGeneralCR, medianaTop10lCR,
);