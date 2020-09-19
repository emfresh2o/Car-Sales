import React from 'react';
import { connect } from 'react-redux';

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.carPrice + props.additionalPrice}</h4>
    </div>
  );
};

const myStateToProps = state => {
  return{
    carPrice: state.car.price,
    additonalPrice: state.additionalPrice
  }
}

export default connect( myStateToProps, {})(Total);
