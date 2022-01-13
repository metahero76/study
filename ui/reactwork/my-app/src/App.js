import logo from './logo.svg';
import './App.css';




let a = "Y";
function App() {
  let b = 10;
  const c = 21;
  let d;
  console.log("변수 선언은 되었지만 값이 없는경우 undefined : ", d);

  const mystyle = {
    color:'red'
  }

  return(
    <div>
      <div style={mystyle}>A : {a === "Y" ? "Y입니다.":"Y가 아닙니다."}</div>
      <h1 className="box-style">B10 : {b === 10 && b}</h1>
      <h1>B20 : {b === 20 && b}</h1>
      <h1>C : {c}</h1>
    </div>
  );

}

export default App;
