import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import HomePage from './Components/HomePage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path='/' element={<LoginPage/>} />
        <Route exact path='/home' element={<HomePage/>} />
      </Routes>
    </HashRouter>
  )
}

export default App;
