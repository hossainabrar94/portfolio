import './App.css';
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro/>
      <AboutMe />
    </div>
  );
}

export default App;

// To Do:
// 1) Change Navbar to update as needed
// 2) change intro to figure out how to get styling on title etc
// 3) add functionality to buttons
// ** Remember to always push