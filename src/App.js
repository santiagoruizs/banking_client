
import './App.css';
import Login from './pages/Login';
import Transfer from './pages/Transfer';
import Widthdraw from './pages/Widthdraw';
import Signup from './pages/Signup';
import Deposit from './pages/Deposit'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, useNavigate } from 'react-router-dom';
import Root from './pages/Root';
import Home from './pages/Home';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root />}>
        <Route path="/account" element={<Home />} >
          <Route path="transfer" element={<Transfer />}/>
          <Route path="deposit" element={<Deposit />}/>
          <Route path="widthdraw" element={<Widthdraw />}/>
        </Route>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
       
      </Route>
))
function App() {
  return (
    <RouterProvider router={router} /> 
  );
}

export default App;
