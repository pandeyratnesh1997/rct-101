
import './App.css';
import Todo from './Components/DAY2/Todo';
import {Navbar} from './Components/DAY1/Navbar/Navbar'
import StaticCard from './Components/DAY1/StaticCard/StaticCard';
import Counter from './Components/DAY2/Counter';
import PaymentCard from './Components/DAY3/PaymentCard';
function App() {
  return (
    <div className="App">
      {/* <hr/>
      <h1>Day1 assignment</h1> */}
      <Navbar/>
      <StaticCard/>
      <hr/>
      <h1>Day2 assignment</h1>
     
      <Todo/>
      <Counter value={0}/>
      <hr/>
      <h1>Day3 Assignment</h1>
      <PaymentCard/>
     
    </div>
  );
}

export default App;
