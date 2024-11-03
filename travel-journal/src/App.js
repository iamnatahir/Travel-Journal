
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Data from './components/Data';
function App() {
  const arr=Data.map((item)=>{
    return (
      <Main item={item}/>
      
    )
  })
  return (
    <div className="App">
    <Header/>
    {arr}
    </div>
  );
}

export default App;
