import React, { Component } from 'react';
import { connect } from 'react-redux';
import Data from '../Data/Data';
import AddAction from '../Actions/AddAction';

class ProductList extends Component { 
  constructor(props) {
    super(props)
    this.teste = this.teste.bind(this);
    
  }

   teste(index) {
    const teste = Data[index]
       console.log(teste)
       this.props.product(teste.name, teste.price);
   
   console.log(teste)
     
   }

  render() {

    return (
      <div className="product-list">
        <ul style={{listStyle: "none"}}>
        {Data.map((item, index) => 
        <li 
        key={index}>{`Nome: ${item.name} valor: R$ ${item.price}`}
        <button
        onClick={() => this.teste(index)}
        id={index} 
        type="button"
        >
          Adicionar ao Carrinho
          </button> 
          </li>
          )}
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  product: (name, value) => dispatch(AddAction(name, value))
});

export default connect(null, mapDispatchToProps)(ProductList);
