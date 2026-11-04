function mostrarDatoEnId(idElemento, valor)
{
    let elementoId = document.getElementById(idElemento); // Buscar idElemento dentro del HTML (se pone sin comillas).
    elementoId.textContent = valor; // Mostrar valor del Id
}

function mostrarGastoWeb(idElemento, gasto)
{
    // Elemento gasto
    let elementoGasto = document.createElement("div"); // Creo un contenedor div principal
    elementoGasto.className = "gasto"; // Le asigno su clase a div -> <div class="gasto"></div>

    let elementoId = document.getElementById(idElemento); // Localizar el contenedor donde irá el gasto
    elementoId.append(elementoGasto); // Introduzco el gasto en el contenedor <div class="gasto-descripcion">prueba</div>

    // Elemento gasto-descripción (dentro de Gasto)
    let elementoDescripcion = document.createElement("div") // Creo un div para la siguiente etiqueta que es gasto-descripcion
    elementoDescripcion.className = "gasto-descripcion"; // Asigno una clase al div <div class="gasto-descripcion"></div>
    
    elementoGasto.append(elementoDescripcion); // Introducir la descripción dentro del padre elementoGasto
    elementoDescripcion.textContent = gasto.descripcion; // Introducir texto dentro de un elemento HTML (sin comillas para que no se vea como texto el div gasto.descripcion)

    // Elemento gasto-fecha (dentro de Gasto)
    let elementoFecha = document.createElement("div") // Creo div para fecha
    elementoFecha.className = "gasto-fecha" // Asigno una clase al div <div class="gasto-fecha"></div>

    elementoGasto.append(elementoFecha); // Introducir descripción dentro del padre
    elementoFecha.textContent = gasto.fecha; // Introducir texto HTML dentro del div fecha

    // Elemento gasto-valor (dentro de Gasto)
    let elementoValor = document.createElement("div") // Creo div para valor
    elementoValor.className = "gasto-valor" // Asigno una clase al div <div class="gasto-valor"></div>

    elementoGasto.append(elementoValor) // Introducir valor dentro del padre
    elementoValor.textContent = gasto.valor; // Introducir texto HTML dentro del div valor

    // Elemento gasto-etiquetas (dentro de Gasto)
    let elementoEtiquetas = document.createElement("div") // Creo div para etiquetas 
    elementoEtiquetas.className = "gasto-etiquetas" // Asigno una clase al div <div class="gasto-etiquetas"></div>

    // Recorro los elementos de gasto.etiquetas
    for(let elemento of gasto.etiquetas)
    {
        let elementoEtiquetasSpan = document.createElement("span") // Se crea solamente un span
        elementoEtiquetasSpan.className = "gasto-etiquetas-etiqueta"

        elementoEtiquetas.append(elementoEtiquetasSpan); // Introduzco cada span dentro del div contenedor
        elementoEtiquetasSpan.textContent = elemento;
    }
        elementoGasto.append(elementoEtiquetas); // Introducir valor dentro de elementoGasto
}

function mostrarGastosAgrupadosWeb(idElemento, agrup, periodo)
{
    let elementoId = document.getElementById(idElemento);

    // Elemento agrupación
    let elementoAgrupacion = document.createElement("div") // Creo div para agrupacion
    elementoAgrupacion.className = "agrupacion" // Asigno una clase al div <div class="agrupacion"></div>
    elementoId.append(elementoAgrupacion); // Introducir valor dentro de elementoId
    
    // Elemento título h1
    let elementoTitulo = document.createElement("h1") // Crear una etiqueta h1 para meter los elementos

    if(periodo == "dia")
    {
       elementoTitulo.textContent = "Gastos agrupados por día";
    }
    else if(periodo == "mes")
    {
        elementoTitulo.textContent = "Gastos agrupados por mes";
    }
    else
    {
        elementoTitulo.textContent = "Gastos agrupados por año";
    }

    elementoAgrupacion.append(elementoTitulo); // Introducir valor dentro de Agrupacion

    // Recorrer el agrup
    for(let elemento of Object.entries(agrup)) // Agrup es un objeto y no un array, por eso lo recorro con object.entries
    {
        let elementoAgrupacionDato = document.createElement("div") // Se crea un div para la clave
        elementoAgrupacionDato.className = "agrupacion-dato" // Asignar clase dentro del div

        let elementoClave = document.createElement("span"); // Crear span para la clave
        elementoClave.className = "agrupacion-dato-clave" // Se pone esto dentro del span
        elementoClave.textContent = elemento[0]; // El elemento 0 contiene la clave
        
        let elementoValor = document.createElement("span") // Crear span para valor
        elementoValor.className = "agrupacion-dato-valor" // Se pone esto dentro del span
        elementoValor.textContent = elemento[1]; // El elemento 1 contiene el valor

        // Dentro del padre introduzco los spans
        elementoAgrupacionDato.append(elementoClave);
        elementoAgrupacionDato.append(elementoValor);

        // Introduzco el div en la agrupación principal
        elementoAgrupacion.append(elementoAgrupacionDato);
    }
}

export{
    mostrarDatoEnId,
    mostrarGastoWeb,
    mostrarGastosAgrupadosWeb
}