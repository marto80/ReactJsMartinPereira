import './App.css';
import ThemeProvider from './contexts/Tema';
import Router from './routes';

function App() {

  return (
    <div>
    <ThemeProvider>
    <Router/>
    </ThemeProvider>
    </div>
  );
}

export default App;