import React, { Component } from 'react';
import { connect } from 'react-redux';
import RemoveAction from '../Actions/RemoveAction'
import ClearAction from '../Actions/ClearAction'

class Cart extends Component {

  constructor(props) {
    super(props)
    this.teste2 = this.teste2.bind(this);
  }

  teste2(index){
    this.props.removeProduct(index, this.props.product[index].productValue)
  }

  teste3 = () => {
    this.props.clearAllList()
  }
  
  render() {
    
    const { product, totalValue } = this.props;
    
    return (
      <div className="cart-container">
        <h1>Carrinho de Compra</h1>
        <button type="button" onClick={ this.teste3 }>Limpar Carrinho</button>
        <h5>Valor Total: R${totalValue.toFixed(2)}</h5>
          {product.map((item, index) => <h4
           key={index}>
             {
             `Nome: ${item.productName} 
             Valor: R$ ${item.productValue}`
             }<button
               onClick={() => this.teste2(index)} 
              >
               Remover
               </button>
               </h4> 
               )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  removeProduct: (position, value) => dispatch(RemoveAction(position, value)),
  clearAllList: () => dispatch(ClearAction()) 
})

const mapStateToProps = (state) => ({
  product: state.CartReducer.productsList,
  totalValue: state.CartReducer.value 
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
