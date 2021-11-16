import logo from './logo.svg';
import './App.css';
import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route exact path="/" element={<Read/>} />
          <Route exact path="/create" element={<Create/>} />
          <Route exact path="/update" element={<Update/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;


