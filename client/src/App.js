import logo from './imgs/toned-logo.svg';
import tonedtitle from './imgs/toned-title.svg'
import ExpandCard from './components/ExpandCard'
import './App.css';


function App() {
  return (
    <div className="App">
      {/* <img src={tonedtitle} width="100%" alt="toned" />
      <img src={logo} className="App-logo" alt="logo" /> */}
      <ExpandCard name = "Workout 1"/>
      <ExpandCard name = "Workout 2"/>
    </div>
  );
}

export default App;
