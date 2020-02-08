
/*let numbers = [3, 2, 5, 8, 9, 10];
let total = 0;
for(let index = 0; index < numbers.length; index = index + 1) {
    total = total + numbers[index];
}

console.log("total", total);
*/
function Pregunta1(){
    console.log(parseInt(prompt("Ingrese el primero numero")) + parseInt(prompt("Ingrese el sgdo numero")));
}

function Pregunta2(){
    let notas=0;
    for(let i=0; i<4; i++){
        notas+=parseInt(prompt("Ingrese una nota"));
    }
    console.log("El promedio de las notas es: " + notas/4);
}


function Pregunta3(){
    console.log("El area del rectangulo es " + prompt("Ingrese la base del rectangulo")*(prompt("Ingrese la altura del rectangulo")));
}

function Pregunta4(){
    console.log("El area del triangulo es " + (prompt("Ingrese la base del triangulo")*prompt("Ingrese la altura del triangulo"))/2);
}


function Pregunta5(){
    console.log("El area de la circunferencia es " + (prompt("Ingrese el radio de la circunferencia")**2*3.14));
}

function Pregunta6(){
    console.log("El sueldo semanal del trabajador es: " + prompt("Ingrese las horas trabajadas") * prompt("Ingrese el salario de hora hombre"));
}

function Pregunta7(){
    console.log("Las pulgadas a pedir son: " + prompt("Ingrese los metros requeridos")*0.0254);
}

function Pregunta8(){
    console.log("La cantidad de dolares que se pueden adquirir son: " + prompt("Ingrese la cantidad de soles a convertir a dolares")/3.38 +"$");
}

function Pregunta9(){
    console.log("La edad del solicitante es: " + (2020 - prompt("Ingrese el ano de nacimiento del solicitante")));
}

function Pregunta10(){
    let menorE=100;
    let nombreM;
    let nombre;
    let edad;
    for(let i=0; i<3; i++){
        nombre=prompt("Ingrese el nombre de la persona: ")
        edad=prompt("Ingrese la edad de la persona: ")
        if(edad<menorE)
        {
            menorE=edad;
            nombreM=nombre;
        }
    }
    console.log(nombreM + " es el menor de los tres");
}

function Pregunta11(){
    let antiguedad=prompt("Ingrese la antiguedad del empleado: ");
    let bono;
    if(antiguedad>5) bono=1000;
    else bono=antiguedad*100;
    console.log("Se le dara " + bono + "$ a este empleado.");
}

function Pregunta12(){
    let salario=1500;
    for(let i=1; i<=6; i++){
        salario+=salario*.1;
        console.log("El salario del ano " + i + " es: " + salario);
    }
}

function Pregunta13(){
    let aprobados=0;
    let desaprobados=0;
    let N = prompt("Ingrese el numero de calificaciones: ");
    for(let i=0; i<N; i++){
        if(prompt("Ingrese la calificacion: ")>=10.5) aprobados+=1;
        else desaprobados+=1;
    }
    console.log("Hay " + aprobados + " alumnos aprobados y " + desaprobados + " alumnos desaprobados.");
}

function Pregunta14(){
    let N = prompt("Ingrese el numero de focos: ");
    let color;
    var cantidad = [0, 0, 0];
    for(let i=0; i<N; i++){
        color=prompt("Ingrese el color del foco: ");
        switch(color){
            case "verde": 
                cantidad[0]+=1;
                break;
            case "blanco": 
                cantidad[1]+=1;
                break;
            default: cantidad[2]+=1;
        }  
    }
    console.log("Hay " + cantidad[0] + " focos verdes, " + cantidad[1] + " focos blancos y " + cantidad[2] + " focos rojos.");	
}

function Pregunta15(){
    if(prompt("Ingrese su edad: ")<18) console.log("No puede votar");
    else console.log("Si puede votar");
}