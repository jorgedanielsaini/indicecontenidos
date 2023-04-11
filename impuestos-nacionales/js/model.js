
const getTemas = (dimension=0) => {
    let temas = []
    
    //cuando la dimension es 0, tiene que cargar el primer tema del árbol
    //es importante que no se repita
    if (dimension==0) {
        for (let i=0;i<arbol.length;i++) {
        const index = temas.findIndex((valor)=> valor == arbol[i].tema[dimension])
        if (index==-1) {
            temas.push(arbol[i].tema[dimension])
            }
        }
        return temas    
    }
    
    //cuando dimensión es mayor a 0
    //prefiltrado con los temas que se repiten en seleccionado, si la dimension es 0
    let prefiltrado = []
    for (let i=0;i<arbol.length;i++) {
            for (let j=0;j<dimension;j++) {
                const index = seleccionado.findIndex((valor)=> valor == arbol[i].tema[j])
                if (index!=-1) {
                    prefiltrado.push(arbol[i])
                }
            }
        }
    
    //selecciona todo lo que esté en la dimension, en base a que se encuentre contenido en la rama anterior
    for (let i=0; i<prefiltrado.length;i++) {
        const compara = []
        
        for (let j=0;j<dimension;j++) { //dimension siempre va a ser mayor a 0
            //armo un array con todo lo que coincide con seleccionado
            compara.push(prefiltrado[i].tema[j])
        }
        if (JSON.stringify(seleccionado) == JSON.stringify(compara)) {
            const index = temas.findIndex((valor)=>valor==prefiltrado[i].tema[dimension])
            if (index==-1) {
                temas.push(prefiltrado[i].tema[dimension])
            }
        }        
    }

    console.log(temas)
    if (temas[0] == undefined) {
        // alert('se terminó')
        temas = ""
    }

    return temas
}

const getComplejidad = () => {
    const index = arbol.findIndex((valor)=> JSON.stringify(valor.tema) == JSON.stringify(seleccionado))
    const complej = arbol[index].complejidad;
    return complej
}

const getComplejidadDetalle = () => {
    const index = arbol.findIndex((valor)=> JSON.stringify(valor.tema) == JSON.stringify(seleccionado))
    return arbol[index].detalle
}