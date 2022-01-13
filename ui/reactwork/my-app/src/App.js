import logo from './logo.svg';
import './App.css';

function App() {
  
  let list = [1,2,3];

  return(
    <div>
      <div>
        {list.map((n, index) => (
          <h1 key={index}>{n}</h1>
        ))}
      </div>
    </div>
  );

}

export default App;
