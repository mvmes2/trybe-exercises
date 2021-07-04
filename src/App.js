import './App.css';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';

function App() {
  return (
    <div className="App">
      <header><h1>Shoping-Cart</h1></header>
     <ProductList />
     <Cart />
    </div>
  );
}

export default App;
