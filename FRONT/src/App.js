import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'tailwindcss/dist/tailwind.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './components/Navigation'
import ContactosLista from './components/ContactosLista'
import moduleName from './components/CrearContacto'
import CrearContacto from './components/CrearContacto';

function App() {
  return (
  
      <Router>
        <Navigation/>

        <Route path="/" exact component={ContactosLista}/>
        <Route path="/editar/:id" component={CrearContacto}/>
        <Route path="/crear" component={CrearContacto}/>
        
        

      </Router>
    
  );
}

export default App;
