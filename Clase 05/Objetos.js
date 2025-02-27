//Objeto simple
const persona ={
    nombre: 'Juan',
    edad: 20,
    ciudad: "Tijuana"
}

console.log(persona.nombre);

//Modificacion de valor
persona.ciudad = "Coahuila";

console.log(persona);

//Añadir valores
persona.genero = "Masculino";
persona.estatura = 1.75;
console.log(persona);

delete persona.estatura;
console.log(persona);

//Objetos con metodos
const coche= {
    marca: "Dodge",
    modelo: "Stratus",
    color: "Arena",

    arrancar: function(marca){
        console.log("El coche esta avanzando",marca);
    }
}

coche.arrancar(coche.marca);

//Metodo abreviado
const calculadora = {
    suma(a,b){
        return a+b
    }
}
console.log(calculadora.suma(10,10));

//Objetos anidados
const trabajo = {
    nombre:"CSI",
    puesto:"Desarrollador web",
    ubicacion:{
        ciudad:"Saltillo",
        calle: "Avasolo",
        pais: "Mexico"
    }
}

console.log(trabajo.nombre);
console.log(trabajo.ubicacion.ciudad);
console.log(trabajo["ubicacion"]["pais"]);


trabajo.ubicacion.calle = "Calle Avasolo"
console.log(trabajo.ubicacion.calle);

const usuario = {
    nombre:"Jair",
    saludar: function() {
        console.log(`Hola soy ${this.nombre}` );
        
    }
}

usuario.saludar();


//Molde de objetis
class Persona {
    constructor(nombre,edad,genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }

    saludar(){
        console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad}`);
        
    }

}
//Ejemplo de erencia, el padre le pasa sus caracteriusticas al  hijo
class Estudiante extends Persona{
    constructor(nombre,edad,genero,carrera,promedio) { 
        super(nombre,edad,genero)
        this.carrera = carrera;
        this.promedio = promedio;
    }

    estudiar(){
        console.log(`${this.nombre} esta estudiando en ${this.carrera}`);
        
    }
}

const personaCar = new Persona("Jair",23);
personaCar.saludar();

const personaJudith = new Persona("Judith", 25);
personaJudith.saludar();

const AnaPaola = new Estudiante("Ana",24,"Femenino","Enfermeria",10);
AnaPaola.estudiar();
AnaPaola.saludar();