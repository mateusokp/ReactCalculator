import React, { useState } from 'react';
import Screen from './Screen'
import classes from "./Wrapper.module.css";

const Wrapper = ({ children }) => {
  const [currString,setCurrString] = useState('');
  const [currLog, setCurrLog] = useState('');
  const currStringHandler = (text) => {

    console.log(text);
    const last = currLog.slice(-1)
    switch (text) {
      case 'AC':
        setCurrLog('');
        setCurrString('');
        break
      case '=':
        console.log('trying: ', currLog);
         
        try {
          eval(currLog)
        } catch (e) {
          if (e instanceof SyntaxError) {
            setCurrString('Err')
            setCurrLog('')
            break
          }
        }
        const r = eval(currLog)
        console.log('res = ',r)
        setCurrLog(r.toString())
        setCurrString(r.toString())
        break
      case '*':
        setCurrString(text);
        if (last === '-' || last === '+' || last === '*'){
          console.log(currLog.slice(0,-1) + text);
          setCurrLog(currLog.slice(0,-1) + text)
        }else{
          setCurrLog(currLog + text)
        }
        break
      case '+':
        setCurrString(text);
        if (last === '-'){
          if (currLog.slice(-2,-1) === '*'){
            setCurrLog(currLog.slice(0,-2) + text)
            break}
          setCurrLog(currLog.slice(0,-1))
          }else{
            setCurrLog(currLog + text)
          }
      case '-':
        setCurrString(text);
        if(last === '+' || last === '-'){
          console.log(currLog.slice(0,-1) + text);
          setCurrLog(currLog.slice(0,-1) + text)
        }else {
          setCurrLog(currLog + text)
        }
        break
      case '0':
        if(currString === '0'){
          break
        }else{
          if (last === '-' || last === '+' || last === '*'){
            setCurrString(text)
          }else{
            setCurrString(currLog + text)
          }
            setCurrLog(currLog + text)
            break
        }
      case '.':
        if(currString.indexOf('.') !== -1){
          break
        }else{
          if (last === '-' || last === '+' || last === '*'){
            setCurrString(text)
          }else{
            setCurrString(currLog + text)
          }
            setCurrLog(currLog + text)
            break
        }
      default:
      if (last === '-' || last === '+' || last === '*'){
        setCurrString(text)
      }else{
        setCurrString(currLog + text)
      }
        setCurrLog(currLog + text)
        break
    }
  }
  return <div className={classes.wrapper}>
    <Screen string={currString} log={currLog}/>
    <div className={classes.buttonrow}><button className={classes.simplebutton} style={{width: '240px'}} onClick={() => currStringHandler('AC')} id="clear">AC</button><button className={classes.simplebutton} onClick={() => currStringHandler('/')} id="divide">/</button></div>
    <div className={classes.buttonrow}><button className={classes.simplebutton} onClick={() => currStringHandler('7')} id="seven">7</button><button className={classes.simplebutton} onClick={() => currStringHandler('8')} id="eight">8</button><button className={classes.simplebutton} onClick={() => currStringHandler('9')} id="nine">9</button><button className={classes.simplebutton} onClick={() => currStringHandler('*')} id="multiply">*</button></div>
    <div className={classes.buttonrow}><button className={classes.simplebutton} onClick={() => currStringHandler('4')} id="four">4</button><button className={classes.simplebutton} onClick={() => currStringHandler('5')} id="five">5</button><button className={classes.simplebutton} onClick={() => currStringHandler('6')} id="six">6</button><button className={classes.simplebutton} onClick={() => currStringHandler('-')} id="subtract">-</button></div>
    <div className={classes.buttonrow}><button className={classes.simplebutton} onClick={() => currStringHandler('1')} id="one">1</button><button className={classes.simplebutton} onClick={() => currStringHandler('2')} id="two">2</button><button className={classes.simplebutton} onClick={() => currStringHandler('3')} id="three">3</button><button className={classes.simplebutton} onClick={() => currStringHandler('+')} id="add">+</button></div>
    <div className={classes.buttonrow}><button className={classes.simplebutton} style={{width: '160px'}} onClick={() => currStringHandler('0')} id="zero">0</button><button className={classes.simplebutton} onClick={() => currStringHandler('.')} id="decimal">.</button><button className={classes.simplebutton} onClick={() => currStringHandler('=')} id="equals">=</button></div>

  </div>;
};

export default Wrapper;