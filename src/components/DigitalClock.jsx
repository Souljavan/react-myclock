import React, {useEffect, useState} from 'react'
import "./DigitalClock.scss"

const DigitalClock = () => {

    const [clockState, setClockState]=useState(); //usamos useState para crear clockstate dodne se almacenara la hora y la funcion de abajo la actualiza y renderiza

    useEffect(() => {
        setInterval(() => {
          const date = new Date();
          setClockState(date.toLocaleTimeString());
        }, 1000);
      }, []);

    return (
        <div className="digital-clock">
        <h2>{clockState}</h2>
      </div>
    )
}

export default DigitalClock
