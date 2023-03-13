import logo from './logo.svg';
import './App.css';
import MyForm from './Components/addToCart';
import Simpletextarea from './Components/simpleTextArea';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Shopping Cart
<MyForm/>
<Simpletextarea/>
      </header>
    </div>
  );
}

export default App;
