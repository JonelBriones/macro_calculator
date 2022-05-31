import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './views/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path="/"/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
