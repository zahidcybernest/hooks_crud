import logo from './logo.svg';
import './App.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




import Home from './components/home';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import CakeContainer from './components/CakeContainer';




function App() {
  return (
    <div >
      
      
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/read" element={<Read/>} />
          <Route exact path="/create" element={<Create/>} />
          <Route exact path="/update" element={<Update/>} />
          <Route exact path="/cake" element={<CakeContainer/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;


