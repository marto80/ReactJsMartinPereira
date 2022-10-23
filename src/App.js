import './App.css';
import NavBar from './componentes/NavBar';
import Saludo from './containers/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Saludo greeting={'Bienvenidos!'}/>
    </div>
  );
}

export default App;
