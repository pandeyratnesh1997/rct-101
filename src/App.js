
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigationbar from './Components/ContextApi/Navigationbar';
import ToggleMode from './Components/ContextApi/ToggleMode';

// import Todo from './Components/DAY2/Todo';
import {Navbar} from './Components/DAY1/Navbar/Navbar'
import StaticCard from './Components/DAY1/StaticCard/StaticCard';
import Counter from './Components/DAY2/Counter';
import PaymentCard from './Components/DAY3/PaymentCard';
import Todo from './Components/Day5UseEffect1/Todo';
import ReactForm from './Components/Forms_Event_useRef/ReactForm';
import Home from './Components/Routing_1/Home';
import Product from './Components/Routing_1/Product';
import Products from './Components/Routing_1/Products';
import Timer from './Components/useEffect-2_Timer/Timer';
import { AuthProvider } from './Context/AuthContext';


function App() {
  return (
    <div className="App">
      {/* <hr/>
      <h1>Day1 assignment</h1> */}
      {/* <Navbar/>
      <StaticCard/> */}
      <hr/>
      <h1>Day2 assignment</h1>
     {/* <div className='todocont'>
     <Todo/>
     </div> */}
     
    
     
      <Counter value={0}/>
      <hr/>
      <h1>Day3 Assignment</h1>
      {/* <PaymentCard/> */}
     <h1>DAY5 UseEffect-1 assignment</h1>
      {/* <Todo/> */}
      {/* <Timer/> */}
      {/* <ReactForm/> */}
      <AuthProvider>
        <Navigationbar/>
      </AuthProvider>
      <ToggleMode/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:id' element={<Product/>}/>
      </Routes>

    </div>
  );
}

export default App;
