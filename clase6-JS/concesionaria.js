//Array a utilizar: autos disponibles

const autosDisponibles = [
    {marca: 'Chevrolet', modelo: 'Camaro', puertas: 2},
    {marca: 'Chevrolet', modelo: 'Cruze', puertas: 4},
    {marca: 'Ford', modelo: 'Fiesta', puertas: 4},
    {marca: 'Ford', modelo: 'Focus', puertas: 4},
    {marca: 'Ford', modelo: 'Mustang', puertas: 4},
    {marca: 'Ford', modelo: 'Fusion', puertas: 4},
    {marca: 'Ford', modelo: 'Ka', puertas: 2},
    {marca: 'Audi', modelo: 'A4', puertas: 5},
    {marca: 'Audi', modelo: 'A5', puertas: 5},
    {marca: 'Audi', modelo: 'A6', puertas: 5},
    {marca: 'Audi', modelo: 'A7', puertas: 5},
    {marca: 'Audi', modelo: 'A8', puertas: 5},
    {marca: 'Audi', modelo: 'Q5', puertas: 5},
    {marca: 'BMW', modelo: 'Serie 3', puertas: 5},
    {marca: 'BMW', modelo: 'Serie 5', puertas: 5},
    {marca: 'BMW', modelo: 'Serie 7', puertas: 5},
    {marca: 'Mercedes Benz', modelo: 'Clase A', puertas: 5},
    {marca: 'Mercedes Benz', modelo: 'Clase C', puertas: 5},
    {marca: 'Mercedes Benz', modelo: 'Clase E', puertas: 5},
];

/*Ejercicio 1:
 - Crear una función que tome un listado de autos e imprima por consola el modelo y la marca de *cada auto* con la leyenda `Tenemos disponible un ${modelo}`. Utilizar el método `for` o `forEach` para recorrer el array.
 - Ejecutar dicha función pasando por parámetros el array autosDisponibles.
*/
console.log("==========================================")
console.log("TENEMOS ESTOS AUTOS DISPONIBLES EN STOCK: ")
console.log("==========================================")
const listStock = (autos) => {
    autos.forEach(function (auto){
    console.log(`Modelo: ${auto.modelo}, marca: ${auto.marca}, Cantidad de Puertas: ${auto.puertas}`);
   
  })
}

listStock(autosDisponibles)

/*
Ejercicio 2:
Un día entro Genaro a comprar un auto, y le solicito a Jorge que le muestre que autos tiene disponibles que sean de 4 o menos puertas
        -Crear una función que reciba por parametros
            a) el listado de autos disponibles
            b) la cantidad de puertas requeridas por parámetros.
        -Verificar que vehículos cumplen la condición de puertas requeridas.
        -Ejecutar la función, devolviendo el resultado a una nueva lista llamada autosPuertaGenaro. Utilizaremos el método map() para recorrer el array de autosDisponibles y devolver una nueva lista con los autos que cumplen la condición.
        -Imprimir autosPuertaGenaro utilizando la funcion del punto (1).*/


let genaroPuerta = autosDisponibles.map(function (auto){
    if(auto.puertas <= 4)
    return auto

})


function filtrarundefined (obj){
    if((typeof obj!== 'undefined')){
        return true
    }else {
        return false
    }
}

let autosPuertaGenaro = genaroPuerta.filter(filtrarundefined)



console.log("=======================================================================")
console.log("ESTOS SON LOS AUTOS DISPONIBLES EN LA CANTIDAD DE PUERTAS SELECCIONADAS")
console.log("=======================================================================")
listStock(autosPuertaGenaro)

/*
3) A Genaro le gustaron todos los autos de Ford, y le pidió a Jorge que le muestre los autos de Ford que tiene en su listado.
        - Refactorizar la función del punto dos para que reciba por parametros:
            a) un array de autos
            b) una propiedad a comparar (por ejemplo marca, puerta, modelo, etc.)
            c) una condición a cumplir (cantidad de puertas, marca o modelo). NOTA: Se puede usar el operador ==, no es obligatorio utilizar ===.
        - Ingresar el listado de autos que cumplen la condición N°2 (autosPuertaGenaro) y devolver un nuevo listado llamado autosMarcaPuertaGenaro.
        - Imprimir por consola el listado de autos con la leyenda `Tenemos disponibles los autos ${marca} ${modelo} que tienen ${puertas} puertas`.*/

let autosMarcaPuertaGenaro 
function autoMarcaPuerta (auto,aMarca,aPuertas){
    autosMarcaPuertaGenaro = auto.map(function (auto){
        if (auto.marca === aMarca && auto.puertas <= aPuertas){
        console.log(`MARCA: ${auto.marca}, MODELO:  ${auto.modelo}, QUE TIENE ${auto.puertas} PUERTAS`)
            return (auto)
        }
})
}


console.log("===========================================================================")
console.log("TENEMOS DISPONIBLES LOS SIGUIENES AUTOS SEGUN MARCA Y PUERTAS SELECCIONADAS")
console.log("===========================================================================")
autoMarcaPuerta(autosPuertaGenaro, 'Ford',4)

/*
4) Genaro decidió comprar un Mustang
    - Tomar el listado de autos que cumplen la condición N°3 (autosMarcaPuertaGenaro) y devolver un objeto llamado autoComprado. Utilizaremos el método filter sobre la propiedad modelo. Es obligatorio utilizar una comparación estricta (===) para que el objeto sea el que cumpla la condición.
    - Imprimir por pantalla el objeto autoComprado, con la leyenda `Felicitaciones Genaro por haber adquirido tu nuevo y flamante ${autoComprado.marca} ${autoComprado.modelo} que disfrutes tus ${autoComprado.puertas} puertas`.*/

let filtroautoMarcaPuertaGenaro = autosMarcaPuertaGenaro.filter(filtrarundefined)

let autoComprado = {}
let autocompradomustang = filtroautoMarcaPuertaGenaro.filter(function(auto){
    if(auto.modelo === 'Mustang'){
    autoComprado = {Marca: auto.marca, Modelo: auto.modelo, Puertas: auto.puertas}
        return autoComprado
    }
   })

console.log("****************************************************************************************************************")
console.log(`Felicitaciones Genaro!!!!... por haber adquirido tu nuevo y flamante ${autoComprado.Marca} ${autoComprado.Modelo} que disfrutes tus ${autoComprado.Puertas} puertas`)
console.log("****************************************************************************************************************")

/*
5) Jorge necesita tener su listado actualizado.
        - Crear una función que reciba el listado de autos original (autosDisponibles) y filtre el autoComprado que compro Genaro, devolviendo un nuevo array sin ese auto. Podemos utilizar el método que querramos.
        - Imprimir en pantalla el nuevo listado de autos utilizando la función del punto (1).*/

let stockActual
function stock (autos, vendido){
    stockActual = autos.map(function(element, index){
        if(element.modelo === vendido.Modelo){
          autos.splice(index,0)
        }else{
        return element
        }

    })
}

stock(autosDisponibles,autoComprado)

let stockProceso = stockActual.filter(filtrarundefined)
console.log("=======================================================")
console.log("STOCK ACTUALIZADO LUEGO DE LA ULTIMA VENTA REALIZADA")
console.log("=======================================================")
listStock(stockProceso)