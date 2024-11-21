import { Route, Routes } from 'react-router-dom';
import Navbar from "../src/components/Navbar"
import Home from './pages/Home';
import UserList from './pages/UserList';
import UserDetails from './pages/UserDetails';
import './App.css';


function App() {
 
  return (
    <div className="App">
     <Navbar/>
     <Routes>
      <Route  path='/' element= {<Home/>}></Route>
      <Route path='/users' element= {<UserList/>}/>   
      <Route path='/users/:id' element={<UserDetails/>}/>
    </Routes>
    </div>
  );
}

export default App;
