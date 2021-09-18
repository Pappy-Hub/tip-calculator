import react, {useState} from 'react';
import './App.css';
import {BiDollar} from 'react-icons/bi'

function App() {
  const [value, setValue] = useState(0)
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
                <button>5%</button>
                <button>10%</button>
                <button>15%</button>
              </section>
              <section className='customtwo'>
                <button>25%</button>
                <button>50%</button>
                <div className='custominputdiv'><input placeholder='CUSTOM'/></div>
              </section>
            </div>
          </div>
        </div>
        <div className='divtwo'>
          two
        </div>
      </section>
    </section>
  );
}

export default App;
