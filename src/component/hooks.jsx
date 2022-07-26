import React, {useState, useEffect} from 'react';

export default function Inicio () {
    const [Valores, setValores] = useState({
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José'

    });
   useEffect(() => {
    let timerID = setInterval(()=> tick(),1000);
    return () => {
        clearInterval (timerID);
    };
   }, []);

   return (
    <div>
        <h2>Hora Actual:{Valores.fecha.toLocaleTimeString()}</h2>
        <h3>{Valores.nombre} {Valores.apellidos}</h3>
        <h1>Edad: {Valores.edad}</h1>
    </div>
   )
     function tick() { setValores ((prevState)=>{
    let edad = prevState.edad +1;
    return{
        ...prevState,
        fecha:new Date(),
        edad
        }
        });
    }
}



