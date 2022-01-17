import React,{useState} from 'react';
import './App.scss';
import DigitalClock from './components/DigitalClock';
import Countdown from './components/Countdown';
import Cronometro from './components/Cronometro';

function App() {
  const[showDigitalclock, setDigitalclock] =useState(false)
  const[showCountdown, setCountdown] =useState(false)
  const[showCronometro, setCronometro] =useState(false)

    
  const showeducation = (e) => {
    if(showDigitalclock===true){
      setDigitalclock(false)
    }
    else {setDigitalclock(true)}
  };

  const CountDown = (e) => {
    if(showCountdown===true){
      setCountdown(false)
    }
    else {setCountdown(true)}
  };

  const Cronometror = (e) => {
    if(showCronometro===true){
      setCronometro(false)
    }
    else {setCronometro(true)}
  };

  return (
    <div className="App">

    <div className="botones">
    <button onClick={()=>showeducation()}>Ver Reloj Digital</button>
    <button onClick={()=>CountDown()}> Ver CuentaAtras</button>
    <button onClick={()=>Cronometror()}> Ver Cronometro</button>
    </div>

    {showDigitalclock? (<DigitalClock />):null}
    {showCountdown? (<Countdown />):null}
    {showCronometro? (<Cronometro />):null}
      
    </div>
  );
}

export default App;
