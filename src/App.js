
import './App.css';

// import Todo from './Components/DAY2/Todo';
import {Navbar} from './Components/DAY1/Navbar/Navbar'
import StaticCard from './Components/DAY1/StaticCard/StaticCard';
import Counter from './Components/DAY2/Counter';
import PaymentCard from './Components/DAY3/PaymentCard';
import Todo from './Components/Day5UseEffect1/Todo';
function App() {
  return (
    <div className="App">
      {/* <hr/>
      <h1>Day1 assignment</h1> */}
      <Navbar/>
      <StaticCard/>
      <hr/>
      <h1>Day2 assignment</h1>
     <div className='todocont'>
     {/* <Todo/> */}
     </div>
     
    
     
      <Counter value={0}/>
      <hr/>
      <h1>Day3 Assignment</h1>
      <PaymentCard/>
     <h1>DAY5 UseEffect-1 assignment</h1>
      <Todo/>

    </div>
  );
}

export default App;
