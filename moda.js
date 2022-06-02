// const lista1 = [
//     1,
//     2,
//     3,
//     1,
//     2,
//     3,
//     4,
//     2,
//     2,
//     1,
//     2,
// ];

// const lista1Count = {};

// lista1.map(
//     function(elemento){
//         if(lista1Count[elemento]){
//             lista1Count[elemento] += 1;
//         }else{
//             lista1Count[elemento] = 1;
//         }
//     }
// );

// const lista1Array = Object.entries(lista1Count).sort(
//     function(valorAcumulado, nuevoValor){
//         return valorAcumulado[1] - nuevoValor[1];
//     }
// );

// const moda = lista1Array[lista1Array.length - 1];

function calcularModa() {
    const entradaModa = document.getElementById("inputModa");
    const modaValue = entradaModa.value;
  
    let arrayValor = Array.from(modaValue.split(","), Number);
  
    const listaContador = {};
  
    arrayValor.map(function (elemento) {
      if (listaContador[elemento]) {
        // listaContador[elemento] = listaContador[elemento] + 1;
        listaContador[elemento] += 1;
      } else {
        listaContador[elemento] = 1;
      }
    });
  
    const listaArray = Object.entries(listaContador).sort(function (elementoA, elementoB) {
      return elementoA[1] - elementoB[1];
    });
  
    const moda = listaArray[listaArray.length - 1];
    
    const mostrarResultado = document.getElementById("resultadoModa");
    mostrarResultado.innerText = "La moda es: "  + moda[0] + " que se repite " + moda[1] + " veces";
  }