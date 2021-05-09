import Calculate from './component/Calculate.js'
import './App.css';
import {useState} from 'react';
import Numbers from './component/Numbers.js';
function App() {
  let [text,setText]=useState("");
  function fun(obj){
    setText(obj);
  }
  return (
    <div className="App">
      <Calculate fn={fun} txt={text}/>
      <Numbers fn={fun} txt={text}/>
    </div>
  );
}

export default App;