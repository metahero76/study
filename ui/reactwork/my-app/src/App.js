import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";

function App() {

  //let number = 1; // 상태 값 아님
  // eslint-disable-next-line no-undef
  const [nn, setNn] = useState(2);


  const add = () => {
    setNn(nn + 1);
    console.log('add', nn);
  }

  return(
    <div>
      <div>
        <h1>숫자 : {nn}</h1>
        <button onClick={add}>더하기</button>
      </div>
    </div>
  );
 
}

export default App;
