import WorkoutDayCard from './components/WorkoutDayCard';
import PastWorkoutTitle from "./imgs/pastworkouts-title.svg"
import './App.css';


function App() {
  return (
    <div className="App">
      <img className = "center" src = {PastWorkoutTitle} alt="past workouts" />
      <WorkoutDayCard />
      <WorkoutDayCard />
    </div>
  );
}

export default App;
