import logo from './logo.svg';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Navigation from './Component/Navigation/Navigation';
import Background from './Component/Background/Background';
import Card from './Component/Card/Card';
import Cardchild from './Component/Card/Cardchild';
import Form from './Component/Form/Form';
import Banner from './Component/Banner/Banner';
import Team from './Component/Team/Team';
import AddDetails from './Component/AddDetails/AddDetails';
import LoginPage from './Page/Loginpage';
import Home from './Page/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/' element={<AddDetails/>}/>
        <Route path='/Login' element={<LoginPage/>}/>
        <Route path='/Home' element={<Background/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
