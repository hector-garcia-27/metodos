const listaDeTareas = [
    {
        id: 1,
        accion: "Hacer la cama",
        completado: false
    },
    {
        id: 2,
        accion: "Tomar una ducha",
        completado: false
    },
    {
        id: 3,
        accion: "Preparar desayuno",
        completado: false
    }
]

//declaración de funcion para actualizar la pagina
function renderizarPagina() {
    let guardarTarea = ""
    for (tarea of listaDeTareas) {
        guardarTarea += `
        <li class="formatoList">
        <div class="textid">${tarea.id}</div>
        <div class="text">${tarea.accion}</div>
        <button onclick="marcarRealizado(${tarea.id})" class="boton"><img src="./img/icon-check-ok.svg" alt=""></button>
        <button onclick="borrarTarea(${tarea.id})" class="boton"><img src="./img/icon-delete.svg" alt="icono borrar"></button>
        </li>
        `
    }
    ubicacionLista.innerHTML = guardarTarea
    totalTarea.innerHTML = "Total : " + listaDeTareas.length // agrego esto dentro de la funcion de renderizar pagina para que se mantenga siempre actualizado (requerimiento 3)
    
    let Tareasrealizadas = listaDeTareas.filter((tarea) => tarea.completado === true)//requerimiento 5
    totalRealizado.innerHTML = "Total realizado : " + Tareasrealizadas.length //requerimiento 5

}

// localizaciones de id
const ubicacionLista = document.querySelector("#listaul") // donde se agregará la lista
const tareaInput = document.querySelector("#nuevaTarea") // texto de la nueva tarea
const btnAgregar = document.querySelector("#registro") // donde captar la accion de agregar
/* const checkInput = document.getElementById("check") */
const totalTarea = document.querySelector("#cuentaTotal") // para punto 3
const totalRealizado = document.querySelector("#cuentaRealizado")// para punto 5

function nuevaTarea() { //requerimiento 1
    const nuevaTarea = tareaInput.value
    if (listaDeTareas.length === 0) { // este condicional es para cuando el array no tiene datos, si el array.length = 0 => la formula para crear el id rompe.
        listaDeTareas.push({ id: 1, accion: nuevaTarea, completado: false })
    } else {
        listaDeTareas.push({ id: 1 + listaDeTareas[listaDeTareas.length - 1].id, accion: nuevaTarea, completado: false })
    }
    tareaInput.value = ""
    renderizarPagina()
}

btnAgregar.addEventListener("click", nuevaTarea)
renderizarPagina()

function marcarRealizado(id) {
    const marcarTareaId = listaDeTareas.findIndex((element) => element.id === id)
    listaDeTareas[marcarTareaId].accion = "Tarea completada"
    listaDeTareas[marcarTareaId].completado = true
    renderizarPagina()
}

function borrarTarea(id) { //requerimiento 2
    const encontrarid = listaDeTareas.findIndex((objeto) => objeto.id === id)
    listaDeTareas.splice(encontrarid, 1)
    renderizarPagina()
}



/* listaDeTareas.filter((element) => element.completado === true) */






