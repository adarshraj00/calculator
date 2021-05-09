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
      <a href="http://adarshraj.netlify.app" id="link" target="__blank" >made by adarsh</a>
    </div>
  );
}

export default App;