
import './App.css';
import Todo from './Components/DAY2/Todo';
import {Navbar} from './Components/Navbar/Navbar'
import StaticCard from './Components/StaticCard/StaticCard';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <StaticCard/>
      <Todo/>
    </div>
  );
}

export default App;
