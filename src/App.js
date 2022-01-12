import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard'

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Jane" lastName="Doe" age={ 45 } hairColor="Black" />
      <PersonCard firstName="John" lastName="Smith" age={ 88 } hairColor="Brown" /> 
      <PersonCard firstName="Millard" lastName="Fillmore" age={ 50 } hairColor="RebeccaPurple" /> 
      <PersonCard firstName="Maria" lastName="Smith" age={ 42 } hairColor="DodgerBlue" /> 
    </div>
  );
}

export default App;
