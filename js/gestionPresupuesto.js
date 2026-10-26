// TODO: Crear las funciones, objetos y variables indicadas en el enunciado

// TODO: Variable global
let presupuesto = 0;
// Añadir las nuevas variables globales
let gastos = [];
let idGasto = 0;

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
function CrearGasto(descripcion, valor, fecha, ...etiquetas) {
    this.descripcion = descripcion;
    this.valor = valor;
    this.fecha = fecha;
    this.etiquetas = [];

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
this.mostrarGastoCompleto = function() {
    let textoEtiquetas = "";

    for (let i = 0; i < this.etiquetas.length; i++) {
        if (i > 0) {
            textoEtiquetas += "\n";
        }

        textoEtiquetas += "- " + this.etiquetas[i];
    }

    return `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €.
Fecha: ${new Date(this.fecha).toLocaleString()}
Etiquetas:
${textoEtiquetas}
`;
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

    let fechaNormal = Date.parse(fecha);

    if(isNaN(fechaNormal))
    {
        this.fecha = Date.now();
    }
    else
    {
        this.fecha = fechaNormal;
    }

        this.anyadirEtiquetas = function(...etiquetas)
        {
            for(let i = 0; i < etiquetas.length; i++)
            {
                if(!this.etiquetas.includes(etiquetas[i]))
                {
                    this.etiquetas.push(etiquetas[i]);
                }
            }
        }
        this.anyadirEtiquetas(...etiquetas); // Llamar a this.anyadirEtiquetas)()
        
        this.actualizarFecha = function(fecha)
        {
            let fechaActualizada = Date.parse(fecha);

            if(!isNaN(fechaActualizada))
            {
                this.fecha = fechaActualizada;
            }
        }

        this.borrarEtiquetas = function(...etiquetas)
        {
                for(let i = 0; i < etiquetas.length; i++)
                {
                    let posicion = this.etiquetas.indexOf(etiquetas[i]); // Compruebo la posición de la etiqueta
                    if(posicion !== -1)
                    {
                        this.etiquetas.splice(posicion, 1); // Eliminarla una vez vista la posición
                    }
                }             
        }
    }

function listarGastos()
{
return gastos;
}

function anyadirGasto(gasto)
{
    gasto.id = idGasto; // Asignar identificador actual al gasto.
    idGasto++;  // Incrementar contador para el siguiente gasto.
    gastos.push(gasto); // Añade objeto completo al array.
}

function borrarGasto(id)
{
    for(let i = 0; i < gastos.length; i++)
    {
        if(id == gastos[i].id)
        {
            gastos.splice(i, 1);
        }
    }
}

function calcularTotalGastos()
{
    let suma = 0;

    for(let i = 0; i < gastos.length; i++)
    {
        suma = suma + gastos[i].valor;
    }
    return suma;
}

function calcularBalance()
{
    let totalBalance = calcularTotalGastos();

    totalBalance = presupuesto - totalBalance;

    return totalBalance;
}




// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto,
    listarGastos,
    anyadirGasto,
    borrarGasto,
    calcularTotalGastos,
    calcularBalance
}
