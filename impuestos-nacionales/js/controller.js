//1. Selección de tema
    //a. getTemas. getTemas el array temas para generar los botones
    //b. Botones. genera los botones
    //c. Cuando no hay más temas (se llega al último punto de la rama), genera los botones de complejidad
//2. Factura
    //a. Al seleccionar la complejidad, lo suma a la factura
    //b. Vuelve al punto 1

const moduloPrecio = 10;
let seleccionado = [];
let factura = [];
let id=0;

window.addEventListener("load", function(event) {
    init()
  });

const init = () => {
    //inicia el flujo

    seleccionado = []
    const temas = getTemas(0)
    console.log(temas)
    //genera botón
    limpiarBotones()
    botones(temas)
    breadcrumbHtml()
}

const seleccion = (e) => {
    // console.log('innerHTML', e.innerHTML)
    // seleccionado.push(e.innerHTML)
    seleccionado.push(e)
    console.log(seleccionado)
    const temas = getTemas(seleccionado.length)
    limpiarBotones()
    if (!temas.length) {
        const complej = getComplejidad()
        const detalle = getComplejidadDetalle()
        complejidadesBtn(complej, detalle)
        breadcrumbHtml()
    } else {
        botones(temas)
        console.log('seleccionado', seleccionado)
        breadcrumbHtml()
    }
}

const sumar = (i, compl, modulo) => {
    const importe = document.getElementsByName(i.toString())

    if (!importe[0].value) {
        alert('No puede ser 0')
        return
    }
    if (importe[0].value<0) {
        alert('No puede ser menor a 0')
        return
    }
    console.log(seleccionado)
    const obj = {
        tema: JSON.parse(JSON.stringify(seleccionado)), //no sé por qué lo hago así, sino no funciona
        complejidad: compl,
        modulo: modulo,
        sugeridoPorUsuario: importe[0].value,
        precio: importe[0].value * moduloPrecio,
        id: id
    }
    id = id +1
    factura.push(obj)
    sumarHtml(obj)
    init()
}

//esto está fallando
const eliminarFactura = (id) => {
    const arrayEliminado = factura.filter((valor)=>valor.id != id)
    factura = arrayEliminado
    eliminarFacturaHtml()
}