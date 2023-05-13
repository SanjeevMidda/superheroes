import './index.css';
const superheroes = require('superheroes');

function App() {

  let newSuperhero = superheroes.random();

  return (
    <div className="App">
      <h1>{newSuperhero}</h1>
    </div>
  );
}

export default App;
