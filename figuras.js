// Codigo del cuadrado
console.group("Cuadrado");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");
function perimetroCuadrado(lado){
    return lado *4;
}
//console.log("El perimetro del cuadrado miden: " + perimetroCuadrado + "cm") ;

function areaCuadrado(lado){
    return lado * lado;
}
//console.log("El area del cuadrado miden: " + areaCuadrado + "cm2");
console.groupEnd();

// Codigo del Triandulo
console.group("Triangulo")
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const BaseTriangulo = 4;
//console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + BaseTriangulo + "cm" );

//const alturaTriangulo = 5.5;
//console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base; 
}

function areaTriangulo (base, altura){
    return (base * altura) / 2;
}
console.log("El area del triangulo es: " + areaTriangulo + "cm2");
console.groupEnd();

// Codigo del Circulo
console.group("Circulo")
//Radio
//const radioCirculo = 4;
//console.log("El radio del circulo es: " + radioCirculo + "cm");

//Diametro
function diametroCirculo(radio){
    return radio * 2;
}  
console.log("El diametro del circulo es: " + diametroCirculo + "cm");

//PI
const PI = Math.PI;
console.log("PI es: " + PI + "cm");

//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI; 
} 

//Area
function areaCirculo (radio){
    return (radio * radio) * PI
}

console.groupEnd();

//Aquien interactuamos con el HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("input-cuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("input-cuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);
}



function alturaTrianguloIso(lado1, lado2, base){
    if(lado1 != lado2){
        console.error("Los dalos no son iguales")
    }else{
        const altura = Math.sqrt(lado1**2 - base**2/ 4)
        console.log(altura)
    }
}
alturaTrianguloIso(6, 6, 8)
