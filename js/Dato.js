class Dato{
   

    constructor (descripcion,valor){
        this._descripcion=descripcion;
        this._valor=valor;
    }
    get descripcion(){
        return this._descripcion;
    }
    set descripcion(descripcion){
        this._descripcion=descripcion;
    }
    get valor(){
        return this._valor;
    }
    set valor(valor){
        this._valor=valor;
    }
}

const ingresos   =[5000, 3000, 2000];
const egresos =[100, 500, 1500];

const totalIngreso =()=>{
    let totalIngreso = 0;
    for(const ingreso of ingresos){
        totalIngreso += ingreso;
    }
    return totalIngreso;
};

const totalEgreso = () =>{
    let totalEgreso = 0;
    for(const egreso of egresos){
        totalEgreso += egreso;
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


const cargarCabecero = () =>{
    const presupuesto = totalIngreso() - totalEgreso();
    const porcentajeEgreso = (totalEgreso()/totalIngreso())*100;

    console.log(`Presupuesto: ${formatoMoneda(presupuesto)}`);
    console.log(`Porcentaje de Egreso: ${porcentajeEgreso.toFixed(2)}%`);
};

cargarCabecero();