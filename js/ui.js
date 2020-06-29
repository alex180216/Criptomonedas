//ui.js maneja la interfaz
class Interfaz{
    constructor(){
        this.init();
    }
    init(){
        this.construirSelect();
    }

    construirSelect(){
        cotizador.obtenerMonedasAPI()
            .then(monedas =>{

                //crear un select opciones
                const select = document.querySelector('#criptomoneda');
                
                //iterar con los resultados de la api
                for(const[key, value] of Object.entries(monedas.monedas.Data)){
                    //añadir el simbol y el nombre como opciones
                    const opcion = document.createElement('option');
                    opcion.value = value.Symbol;
                    opcion.appendChild(document.createTextNode(value.CoinName));
                    select.appendChild(opcion);
                }
                
            })
    }


    mostrarMensaje(mensaje, clases){
        const div = document.createElement('div');
        div.className = clases;
        div.appendChild(document.createTextNode(mensaje));

        //seleccionar mesajes
        const divMensaje = document.querySelector('.mensajes');
        divMensaje.appendChild(div);


        //mostrar contenido
        setTimeout(() => {
            document.querySelector('.mensajes div').remove();
        }, 3000);

    }

    //imprimir el resultado de la cotizacion
    mostrarResultado(resultado, moneda, crypto){
        console.log(resultado[crypto][moneda]);

        //construit template
        let templai = `<div class="card bg-warning">
                            <div class="card-body text-light">
                            `
    }
}