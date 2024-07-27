import Graph from "../models/Graph.mjs";

const graph = new Graph();

let btnAgregarDestino = document.getElementById("AgregarISLA");
let btnAgregarConexion = document.getElementById("AgregarISLAB");
let btnRecorridoProfundidad = document.getElementById("buttonProfundidad");
let btnRecorridoAnchura = document.getElementById("buttonAnchura")
let imprimir = document.getElementById("MostrarIslasRecorridas")
let imprimir2 = document.getElementById("MostrarIslaRecorridasB")

let btnDijstra = document.getElementById("rutaMasCorta")
let imprimir3 = document.getElementById("mostrarRutaCorta")

btnAgregarDestino.addEventListener("click", () => {
    let Isla = document.getElementById("destinos").value;
    
    if (graph.addVertex(Isla)) {
        Swal.fire("Se registro", Isla, "success");
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No se registro la isla :(",
        });
    }
});

btnAgregarConexion.addEventListener("click", () => {
    let Isla = document.getElementById("IslaInicio").value;
    let destino = document.getElementById("destino").value;
    let peso = parseInt(document.getElementById("peso").value);
    
    if (graph.addC(Isla, destino, peso)) {
        Swal.fire("Ruta agregada");
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No se pudo agregar la isla",
        });
    }
});

btnRecorridoProfundidad.addEventListener("click", () => {
    imprimir.innerHTML='';
    const vertices=[...graph.getVertices()][0]
    graph.dfs(vertices,(vertex) => {
        imprimir.innerHTML += `${vertex} `
        console.log(vertex)

    });
    Swal.fire("Ahora puede ver las islas");




});
document.addEventListener('DOMContentLoaded',()=> {
    btnRecorridoAnchura.addEventListener("click", () => {


        imprimir2.innerHTML='';
        
        const vertices=[...graph.getVertices()][0]
        graph.bfs(vertices,(vertex) => {
            imprimir2.innerHTML += `${vertex} `
            console.log(vertex)
    
        });
        Swal.fire("Ahora puede ver las islas");
    
    
    });


});

btnDijstra.addEventListener("click", ()  => {
   
    let origen =document.getElementById("verticeInicio").value.trim();
    let destino = document.getElementById("verticeFinal").value.trim();

    const shortestDistance = graph.dijkstra(origen, destino);

    if (shortestDistance === 1000000) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No se encontro ningun camino a la isla",
        });
    } else {
        imprimir3.innerHTML = ` La ruta mas corta es ${shortestDistance} ` ;
        Swal.fire({
            icon: "info",
            text: "Ya puede ver la ruta mas corta"
            
        })
    }

});


