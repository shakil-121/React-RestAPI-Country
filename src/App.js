import './App.css';
import Loadcountry from './components/Country/Country';
import Navbar from './components/navbar/nav';

function App() {
  return (
    <div className="App"> 
      <Navbar></Navbar>
      <Loadcountry></Loadcountry>
    </div>
  );
}

export default App;
