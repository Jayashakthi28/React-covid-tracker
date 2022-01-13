import logo from './logo.svg';
import './App.scss';
import Nav from './components/Nav';
import MainDet from './components/MainDet';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Nav/>
      <MainDet/>
      <SearchBar/>      
    </div>
  );
}

export default App;
