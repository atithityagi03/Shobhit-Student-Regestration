import './App.css';


// Import Our All Components
import NavBar from './components/NavBar';
import ShobhitUniversity from './components/ShobhitUniversity';
import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';
import AboutUS from './components/AboutUS';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ShobhitUniversity />} />
        <Route path='/all' element={<AllUsers />} />
        <Route path='/add' element={<AddUser />} />
      <Route path='/about' element={<AboutUS />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
