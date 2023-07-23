//crear filas y columnas

let tabla=document.querySelector('table')


function Create_table() {

    //validar que no existan mas tablas antes de crear otra
    while (tabla.firstChild) {
        tabla.removeChild(tabla.firstChild);
      }

    //datos de entradas
    let Input_Filas=document.querySelector('#filas')
    let Input_Columnas=document.querySelector('#columnas')

    var containerColumnas =document.createElement('tr')
    

    let filas = parseInt(Input_Filas.value)
    let columnas = parseInt(Input_Columnas.value)

    //creando columnas
    for (let i = 0; i < columnas; i++) {
        var nuevaColumna = document.createElement('th')
        var inputColumna = document.createElement('input') 
        nuevaColumna.appendChild(inputColumna)
        containerColumnas.appendChild(nuevaColumna)
    }
    tabla.appendChild(containerColumnas) 
    

    //creando filas
    for (let f = 0; f < filas; f++) {
        //creando un container de fila por cada columna
        var containerFilas =document.createElement('tr')

        for (let r = 0; r < columnas; r++) {
            var nuevaFila =document.createElement('td')
            var inputFila =document.createElement('input')
            nuevaFila.appendChild(inputFila)
            containerFilas.appendChild(nuevaFila)
                
        }
    tabla.appendChild(containerFilas)

    }
    //aparecer boton para eliminar tabla de forma manual
    document.querySelector('.container_btn_delete_table').style.display='block'

    //limpiar los input
    Input_Filas.value=''
    Input_Columnas.value=''
}

//eliminar tabla de forma manual

function delete_table() {
    //validar que no existan mas tablas antes de crear otra
    while (tabla.firstChild) {
        tabla.removeChild(tabla.firstChild);
      }

    document.querySelector('.container_btn_delete_table').style.display='none'
}