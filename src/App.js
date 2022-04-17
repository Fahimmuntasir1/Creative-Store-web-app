import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Pages/Sheared/Header/Header';
import Home from './Components/Pages/Home/Home'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
