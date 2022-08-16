import './App.css';
import Person from './components/Person';


function App() {
  return (
    <div className="App">
      <Person
      name={"Doe, Jane"}
      age={45}
      color={"Black"}
      />
      <Person
      name={"Smith, John"}
      age={88}
      color={"Brown"}
      />
    </div>
  );
}

export default App;
