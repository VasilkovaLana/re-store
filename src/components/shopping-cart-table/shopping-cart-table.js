import React from 'react';
import './shopping-cart-table.css';
import { connect } from 'react-redux';

const ShoppingCartTable = ({ items, total, onIncrease, onDecreace, onDelete}) => {
  
  const renderRow = (item, idx) => {
    const { id, title, count, total } = item;
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td>
          <button 
            className="btn btn-outline-danger btn-sm float-right"
            onClick={() => onDelete(id)}>
            <i className="fa fa-trash-o" />
          </button>
          <button 
            className="btn btn-outline-success btn-sm float-right"
            onClick={() => onIncrease(id)}>
            <i className="fa fa-plus-circle" />
          </button>
          <button
            className="btn btn-outline-warning btn-sm float-right"
            onClick={() => onDecreace(id)}>
            <i className="fa fa-minus-circle" />
          </button>
        </td>
      </tr>
    );
  }
  return(
    <div className="shopping-cart-tale">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th> 
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          { items.map(renderRow) }
        </tbody>
      </table>

      <div className="total">
        Total: ${total}
      </div>
    </div>
  );
};

const mapStateToProps = ({ cartItems, orderTotal }) => {
  return {
    items: cartItems,
    total: orderTotal
  };
};

const mapDispatchToProps = () => {
  return{
    onIncrease: (id) => {
      console.log(`increace ${id}`);
    },
    onDecreace: (id) => {
      console.log(`decrease ${id}`);
    },
    onDelete: (id) => {
      console.log(`delete ${id}`);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);