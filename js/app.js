const cotizador = new API('bb64c8302f8a6fd6a7e99b4858b93a995375719774bd0bc5232ab3a4304cbeba');
const ui = new Interfaz();


//validar formulario
const formulario = document.querySelector('#formulario');


//event listeners
formulario.addEventListener('submit', (e) =>{
    e.preventDefault();

    //leer la moneda seleccionada
    const monedaSelect = document.querySelector('#moneda');
    const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;

    //elegr criptomoneda
    const criptoSelect = document.querySelector('#criptomoneda');
    const criptoSeleccionada = criptoSelect.options[criptoSelect.selectedIndex].value;

    if(monedaSeleccionada === '' || criptoSeleccionada === ''){
        //indicar alerta de error
        ui.mostrarMensaje('Ambos campos son obligatorios', 'alert bg-danger text-center');
    }else{
        //todo bien
        cotizador.obtenerValores(monedaSeleccionada,criptoSeleccionada)
            .then(data => {
                ui.mostrarResultado(data.resultado.RAW, monedaSeleccionada, criptoSeleccionada);
            })
    }
})