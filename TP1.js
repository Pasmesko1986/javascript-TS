// a. Crea una función constructora llamada Animal que tome dos argumentos: nombre (string) y edad (número). 
// Esta función debería asignar estos valores a las propiedades correspondientes del objeto que está siendo creado 
// y debería tener un método hablar() que imprima un mensaje que diga: "Hola, soy [nombre del animal] y tengo [edad] años".

class Animal {  //Creo una funcion constructora con las propiedades nombre y edad
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }
    
    hablar() {  //Creo un metodo hablar que imprima el texto solicitado
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`)
    }
};

const animal = new Animal("Max", 3); //Creo una instancia de la clase Animal donde paso los valores para las propiedades de la clase padre
animal.hablar() //llamo al metodo hablar dentro de mi clase Animal instanciada con los valores declarados en perro

// b. Crea un prototipo llamado perro que herede de Animal y añade un método ladrido() que imprima: "¡Guau!".

class perro extends Animal {
    ladrido() {  //Creo el metodo nuevo que se llame ladrido e imprima el texto GUAU
        console.log("¡Guau!")
    }
}

// c. Crea una instancia de perro llamada miPerro y prueba ambos métodos.

const miPerro = new perro("Ciruelo", 1); //Creo un unstancia llamada miPerro
miPerro.hablar() //valido el metodo hablar heredado de mi clase padre Animal
miPerro.ladrido() //valido el metodo ladrido creado en mi segunda clase perro

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Ejercicio de Modelo de Herencia:

// a. Define una función constructora Persona que tome tres argumentos: nombre, edad y profesion.

class Persona {  //Creo una funsion constructora con los argumentos nombre, edad y profesion.
    constructor(nombre, edad, profesion) {
        this.nombre = nombre
        this.edad = edad
        this.profesion = profesion
    }
};

// b. Crea un prototipo llamado Estudiante que herede de Persona y añade una propiedad adicional grado (string) y un método estudiar() que imprima: "Estudiando para obtener el grado de [grado]".

class Estudiante extends Persona {  //Creo un prototipo llamado Estudiante que hereda las propiedades de la clase padre Persona
    constructor(nombre, edad, profesion, grado) {
        super(nombre, edad, profesion) //Declaro las propiedades quese heredan de la clase padre
        this.grado = grado //Creo una clase nueva propiedad adicional llamada grado
    }
    estudiar() { //delaro un metodo llamado estudiar con el texto solicitado
        console.log(`Estudiando para obtener el grado de ${this.grado}`);
    }
};

// c. Crea un prototipo llamado Profesor que herede de Persona y añade una propiedad adicional especialidad (string) y un método enseñar() que imprima: "Enseñando [especialidad]".

class Profesor extends Persona { //Creo otra clase que hereda las propiedades de la clase padre Persona
    constructor(nombre, edad, profesion, especialidad) { //Defino las propiedades del constructor
        super(nombre, edad, profesion) //defino que propiedades son heredades de mi clase padre
        this.especialidad = especialidad //defino una propiedad mas 
    }
    enseñar() { //defino el metodo pedido 
        console.log(`Enseñando ${this.especialidad}`);
    }
};

// d. Crea una instancia de Estudiante llamada miEstudiante y una instancia de Profesor llamada miProfesor, y prueba sus métodos.

const miEstudiante = new Estudiante("Pedro", 20, "Estudiante", 4); //Defino una instancia miEstudiante sobre el prototipo Estudiante 
miEstudiante.estudiar()
console.log(miEstudiante)

const miProfesor = new Profesor("Pedro", 20, "Profesor", "Matematica"); //Defino una instancia miProfesor sobre el prototipo Profesor
miProfesor.enseñar()
console.log(miProfesor)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Ejercicio de Composición vs Herencia:

// a. Considerando el código de los ejercicios anteriores, reflexiona sobre cuándo es preferible usar la composición sobre la herencia en el diseño de objetos en JavaScript.

// Creo que la posibilidad de crear nuevas clases en base a prototipos heredados es particularmente practico al momento de crear funciones parecidas donde se diferencien por un tipo 
// de dato pero mantengan una estructura, de esta forma se puede asegurar la integridad del codigo como tambien se vuelve mas facil modificar aquellos elementos en comunes al momento 
// de modificar agregar o eliminar una propiedad o metodo.