import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import { BrowserRouter as Router } from 'react-router-dom'


function App() {
  return (
    <>
      <div>
        <Router>
        <Home/>
        </Router>
      </div>
    </>
  );
}

export default App;
