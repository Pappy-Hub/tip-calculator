import react, {useState} from 'react';
import './App.css';
import {BiDollar} from 'react-icons/bi'
import {BsFillPersonFill} from 'react-icons/bs'

function App() {
  // the variable for the bill value
  const [value, setValue] = useState(0)

  // variable for number of people
  const [people, setPeople] = useState(0)

  // varible for number of people
  const [tip, setTip] = useState(0)

  // varible for number of people
  const [total, setTotal] = useState(0)

  // variable for custom input
  const [custom, setCustom] = useState()

  const fivePercent =()=>{
    if(people == 0){
      alert('people input must be an integer greater than 0')
    }else{
      let x = parseInt(value) * 0.05;
      let tipper = x/parseInt(people)
      setTip(tipper.toFixed(2))
      let y = parseInt(value)/parseInt(people)
      let peeps = y + x/parseInt(people)
      setTotal(peeps.toFixed(2))
    }
  }
  const tenPercent =()=>{
    if(people == 0){
      alert('people input must be an integer greater than 0')
    }else{
      let x = parseInt(value) * 0.10;
      let tipper = x/parseInt(people)
      setTip(tipper.toFixed(2))
      let y = parseInt(value)/parseInt(people)
      let peeps = y + x/parseInt(people)
      setTotal(peeps.toFixed(2))
    }
  }
  const fifteenPercent =()=>{
    if(people == 0){
      alert('people input must be an integer greater than 0')
    }else{
      let x = parseInt(value) * 0.15;
      let tipper = x/parseInt(people)
      setTip(tipper.toFixed(2))
      let y = parseInt(value)/parseInt(people)
      let peeps = y + x/parseInt(people)
      setTotal(peeps.toFixed(2))
    }
    
  }
  const twentyFivePercent =()=>{
    if(people == 0){
      alert('people input must be an integer greater than 0')
    }else{
      let x = parseInt(value) * 0.25;
      let tipper = x/parseInt(people)
      setTip(tipper.toFixed(2))
      let y = parseInt(value)/parseInt(people)
      let peeps = y + x/parseInt(people)
      setTotal(peeps.toFixed(2))
    }
    
  }
  const fiftyPercent =()=>{
    if(people == 0){
      alert('people input must be an integer greater than 0')
    }else{
      let x = parseInt(value) * 0.50;
      let tipper = x/parseInt(people)
      setTip(tipper.toFixed(2))
      let y = parseInt(value)/parseInt(people)
      let peeps = y + x/parseInt(people)
      setTotal(peeps.toFixed(2))
    }
    
  }
  const customizer = (e) =>{
    setCustom(e.target.value)
  }
  const calc = () =>{
    
    let n = parseInt(custom)
    let ti = n/100
    if(people == 0){
      alert('people input must be an integer greater than 0')
    }else{
      let x = parseInt(value) * ti;
      let tipper = x/parseInt(people)
      setTip(tipper.toFixed(2))
      let y = parseInt(value)/parseInt(people)
      let peeps = y + x/parseInt(people)
      setTotal(peeps.toFixed(2))
    }
    
  }
  
  const reset = () =>{
    setTip(0)
    setTotal(0)
    setValue(0)
    setPeople(0)
    setCustom(0)
  }
  return (
    <section className="App">
      <p className='header'>SPLITTER</p>
      <section className='section'>
        <div className='divone'>
          Bill <br/>
          <div className='divoneinner'>
            <BiDollar className='dollar'/>
            <input type='text' className='billinput' value={value} onChange={(e)=> setValue(e.target.value)}/>
          </div>
          <div className="percentage">
            <h5>Select Tip %</h5>
            <div className='custom'>
              <section className='customone'>
                <button onClick={fivePercent}>5%</button>
                <button onClick={tenPercent}>10%</button>
                <button onClick={fifteenPercent}>15%</button>
              </section>
              <section className='customtwo'>
                <button onClick={twentyFivePercent}>25%</button>
                <button onClick={fiftyPercent}>50%</button>
                <div className='custominputdiv'><input onChange={customizer} onMouseLeave={calc} value={custom} placeholder='CUSTOM'/></div>
              </section>
            </div>
          </div>
          <div className='people'>
            <h5>Number of people</h5>
            <div className='divoneinner'>
              <BsFillPersonFill className='dollar'/>
              <input type='text' className='billinput' value={people} onChange={(e)=> setPeople(e.target.value)}/>
            </div>
          </div>
        </div>
        <div className='divtwo'>
          <section>
            <div className='tip-amount'>
              <h5>Tip Amount<br/><span className='sp'>/ Person</span></h5>
              <h2>${tip}</h2>
            </div>
            <div className='tip-amount'>
              <h5>Total &nbsp;&nbsp;&nbsp;<br/><span className='sp'>/ Person</span></h5>
              <h2>${total}</h2>
            </div>
          </section>
          <div className='resetbuttondiv'>
            <button className='reset' onClick={reset}>Reset</button>
          </div>
        </div>
      </section>
    </section>
  );
}

export default App;
