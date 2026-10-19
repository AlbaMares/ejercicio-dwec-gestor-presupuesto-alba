// TODO: Crear las funciones, objetos y variables indicadas en el enunciado

// TODO: Variable global
let presupuesto = 0;

function actualizarPresupuesto(valorActualizado) {
    // TODO
    if(typeof valorActualizado === "number" && valorActualizado >= 0){
        presupuesto = valorActualizado;
        return presupuesto;
    }
    else
    {
        console.log("Error")
        return - 1;
    }
}

function mostrarPresupuesto() {
    // TODO
    let mensaje = "Tu presupuesto actual es de " +presupuesto+ " €";
    return mensaje;
}
// 1. Propiedades -> Creación del objeto Gasto con Función constructora
function CrearGasto(descripcion, valor) {
    this.descripcion = descripcion;
    // TODO
    if(typeof valor === "number" && valor >= 0)
    {
        this.valor = valor;
    }
    else
    {
        this.valor = 0;
    }

    // 2. Métodos a funciones constructoras

            this.mostrarGasto = function() {
            return `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €`;
            };

            this.actualizarDescripcion = function(descripcion)
            {
                this.descripcion = descripcion;
            };

            
            this.actualizarValor = function(valor) {
            if(typeof valor === "number" && valor >= 0)
            {
                this.valor = valor;
            }
        }
}


// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto
}
