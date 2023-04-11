
const limpiarBotones = () => {
    const botoneraHtml = document.getElementById('botonera')
    botoneraHtml.innerHTML = ''
}


const botones = (temas) => {
    const botoneraHtml = document.getElementById('botonera')
    
    for (let i=0;i<temas.length;i++) {
        const boton = document.createElement('button')
        boton.innerHTML = temas[i]
        boton.setAttribute('class', 'boton-carpeta')
        boton.setAttribute('onclick', 'seleccion(this.innerHTML);')
        // boton.onclick = seleccion(boton)
        botoneraHtml.appendChild(boton)
    }
}


const complejidadesBtn = (complej, detalle) => {
    //los convierto en string para comparar ambos arrays
    
    const botoneraHtml = document.getElementById('botonera')

    //creo los elementos
    const detalleHTML = document.createElement('p')
    detalleHTML.innerText = detalle;
    botoneraHtml.appendChild(detalleHTML)

    const tabla = document.createElement('table')
    //acá depende de si tiene valor único o múltiple
    for (let i=0;i<complej.length;i++) {
        const p = document.createElement('p')
        const texto = `${!complej[i].tipo? '' : complej[i].tipo} 
                       ${complej[i].modulo}  
                       ${!complej[i].detalle_complejidad? '' : ' - ' + complej[i].detalle_complejidad }
                       <input type='number' name='${i}' value=${complej[i].modulo}>
                       <button onclick="sumar('${i}', '${complej[i].tipo}', ${complej[i].modulo});">Seleccionar</button>`
        p.innerHTML = texto
        botoneraHtml.appendChild(p)
    }

    botoneraHtml.appendChild(tabla)

}

const atras = () => {
    seleccionado.pop()
    const temas = getTemas(seleccionado.length)
    limpiarBotones()
    botones(temas)
    console.log('seleccionado', seleccionado)
    breadcrumbHtml()
}

const breadcrumbHtml = () => {
    const result = seleccionado.map((valor)=> valor)
    document.getElementById('breadcrumb').innerHTML = result
}

const sumarHtml = (obj) => {
    const resultadoHtml = document.getElementById('resultado')
    const p = document.createElement('p')
    p.setAttribute('name', obj.id)
    p.innerHTML = `
    ${JSON.stringify(obj.tema)} -
    ${obj.complejidad}  - 
    ${obj.modulo} - 
    ${obj.sugeridoPorUsuario} - 
    ${obj.precio}
    <button onclick='eliminarFactura(${obj.id});'>Eliminar</button>
    `
    resultado.appendChild(p)
}

const eliminarFacturaHtml = () => {
    const resultadoHtml = document.getElementById('resultado')
    let linea = ''
    resultadoHtml.innerHTML = linea
    for (let i=0;i<factura.length;i++) {
        linea = linea + `
        ${JSON.stringify(factura[i].tema)} -
        ${factura[i].complejidad}  - 
        ${factura[i].modulo} - 
        ${factura[i].sugeridoPorUsuario} - 
        ${factura[i].precio}
        <button onclick='eliminarFactura(${factura[i].id});'>Eliminar</button>
        `
    }
    resultadoHtml.innerHTML = linea
}