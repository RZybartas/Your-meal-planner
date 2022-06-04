import { Bmr } from './components/Bmr';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { MealPlanner } from './components/MealPlanner';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Bmr />
      <MealPlanner />
    </div>
  );
}

export default App;
