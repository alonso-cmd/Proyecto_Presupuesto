function cargaDatosGuardados(datos, tipo){
    return datos.map((valor)=> new tipo(valor[0],valor[1]))
}

document.getElementById("forma").addEventListener("submit",function(evento){
evento.preventDefault();
evento.target.elements;

const descripcion = evento.target.elements.descripcion.value;
const tipo = evento.target.elements.tipo.value;
const valor = Number(evento.target.elements.valor.value);

console.log(typeof valor);

if(tipo =="Ingreso"){
    const ingreso = new Ingreso(descripcion, valor);
    ingresos.push(ingreso);
    mostrarIngresos(ingresos);
}
if(tipo == "Egreso"){
    const egreso = new Egreso(descripcion,valor);
    egresos.push(egreso);
    mostrarEgresos(egresos);
}
cargarCabecero(ingresos, egresos);
evento.target.reset();
//console.log(descripcion,tipo,valor);

//console.log(evento.target.elements);
//console.log("a");
})

const totalIngreso =(ingresos)=>{
    //console.log(ingresos);
    let totalIngreso = 0;
    for(const ingreso of ingresos){
        //console.log(ingreso.valor);
        totalIngreso += ingreso.valor;
    }
    return totalIngreso;
};

const totalEgreso = (egresos) =>{
    let totalEgreso = 0;
    for(const egreso of egresos){
        //console.log(egreso.valor)
        totalEgreso += egreso.valor;
    }
    return totalEgreso;
}


const formatoMoneda = (valor) =>{
    return valor.toLocaleString("es-MX", {
        style:"currency",
        currency: 'MXN',
        minimumFractionDigits:2
    });
};

const formatoPorcentaje = ()=>{
    return porcentajeEgreso.toLocaleString('es-MX', {
        style: 'percent',
        minimumFractionDigits:2
    });
};


const cargarCabecero = (ingresos, egresos) =>{
    const presupuesto = totalIngreso(ingresos) - totalEgreso(egresos);

    const porcentajeEgreso = parseFloat((totalEgreso(egresos)/totalIngreso(ingresos))*100);
//console.log(porcentajeEgreso);
    console.log(`Presupuesto: ${formatoMoneda(presupuesto)}`);
    console.log(`Porcentaje de Egreso: ${porcentajeEgreso.toFixed(2)}%`);

    document.getElementsByClassName('presupuesto_valor')[0].textContent=("+ "+formatoMoneda(presupuesto));

    document.getElementsByClassName('presupuesto_ingreso--valor')[0].textContent=("+ "+formatoMoneda(totalIngreso(ingresos)));

    document.getElementsByClassName('presupuesto_egreso--valor')[0].textContent=("- "+formatoMoneda(totalEgreso(egresos)));
};

function mostrarIngresos(ingresos){
    const htmlIngresos= ingresos.map(function(dato, posicion){
        
        return (`   <div class="elemento limpiarEstilos">
                    <div class="elemento_descripcion">${dato.descripcion}</div>
                    <div class="derecha limpiarEstilos">
                        <div class="elemento_valor"> + ${formatoMoneda(dato.valor)}</div>
                        <div class="elemento_eliminar">
                            <button class="elemento_eliminar_btn mdi--close-circle-outline">
                            </button>
                        </div>
                    </div>
                </div>`)
    })
   
        document.getElementById("lista-ingresos").innerHTML= htmlIngresos.join(" ");
    
}
function mostrarEgresos(egresos){
const htmlEgresos = egresos.map(function(dato, posicion){
    return(`
         <div class="elemento limpiarEstilos">
                        <div class="elemento_descripcion">${dato.descripcion}</div>
                        <div class="derecha limpiarEstilos">
                            <div class="elemento_valor">- ${formatoMoneda(dato.valor)}</div>
                            <div class="elemento_eliminar">
                                <button class="elemento_eliminar_btn mdi--close-circle-outline">
                                </button>
                            </div>
                        </div>
                    </div>`)
})
document.getElementById("lista-egresos").innerHTML=htmlEgresos.join(" ");
}
