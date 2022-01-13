import './App.scss';
import Nav from './components/Nav';
import MainDet from './components/MainDet';
import SearchBar from './components/SearchBar';
import CountryCont from './components/CountryCont';

function App() {
  return (
    <div className="App">
      <Nav/>
      <MainDet/>
      <SearchBar/>
      <CountryCont/>      
    </div>
  );
}

export default App;
