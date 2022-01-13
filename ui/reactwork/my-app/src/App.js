import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";

function App() {

  console.log("App실행됨");

  let sample = [
    {id:1, name:"홍길동"},
    {id:2, name:"임꺽정"},
    {id:3, name:"장보고"},
    {id:4, name:"코스"}
  ];

  const [users, setUsers] = useState(sample);

  const download = () => {
    //setUsers([...sample]);//데이터가 같아도 레퍼런스 주소가 다르기 때문에 다시그려짐
    //setUsers(sample);
  }

  return(
    <div>
      <div>
        <h1></h1>
        <button onClick={download}>다운로드</button>
        {users.map((u, index)=><h1>{u.id}, {u.name}</h1>)}
      </div>
    </div>
  );
 
}

export default App;
