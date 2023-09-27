const Coche = { marca:"fiat", modelo:"500", matricula:"5555ccc"};

const Casa = {codPostal: "28000", calle:"mayor", portal:"1", piso:"3"};

const FullStackDeveloper = {lenguajes:["javascript"], proyectos:["personal"]};

const Perro = {nombre:"bobby", 
raza: "mastin", 
edad:"5", 
color: "negro",
ladrar: function(){
    return console.log("guau")
},
popo: function(){
    return Math.random()*3
}
};

Portatil= {marca:"apple"}
let marcaPortatil = Portatil.marca; 
let marcaPortatil2 = Portatil["marca"];

let grupos = Concierto.grupos;

let RGB = [Led.rojo, Led.verde, Led.azul];

Portatil.modelo="P345";

Concierto.fecha = new Date();
Concierto.cartelera.push("Guns N' Roses");

let Impresora2 = {nombreArchivo: "aaa", copias:"2", numPaginas:"3"};
Impresora.imprimiendo = Impresora2;

let Noticia = {titular: 'uno',cuerpo: 'dos'};

let Persona = {nombre:"Alex", apellidos: "Marquez", edad: "1"};

let Avion = {
numPasajeros:"50",
despegar: function(){
    return console.log('despegando')

}, 
volar: function(){
    return console.log("llegando al destino")}, 

aterrizar: function(){ console.log('aterrizando')
}};

let Paquete = {objetos: ["tijeras", "celo", "pegamento"]} ;

let Pais = {numHabitantes:"10000", continente: "america", gentilicio:"chileno"};

let codError = O_Error.codigo;

let integrantes = Grupo.integrantes;

let nivelesTinta = Impresora.tinta;

let pixeles = Pantalla.pixeles;

let especificaciones = Movil["especificaciones"];

Grupo.numIntegrantes = 5;

Pantalla.dimensiones = "1920x1080";

Led.encendido = !Led.encendido;

Movil.temperatura = "20º";