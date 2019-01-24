import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import './Calculator.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ButtonPannel from './Components/ButtonPannel';
import Display from './Components/Display';
import {
  clickClear, clickEqual, clickNumber, clickOperator
} from './actions';


class Calculator extends Component {
  static propTypes = {
    value: PropTypes.number,
    display: PropTypes.string,
    clear: PropTypes.func,
    equal: PropTypes.func,
    number: PropTypes.func,
    firstNumber: PropTypes.string,
    secondNumber: PropTypes.string,
    result: PropTypes.string
  }

  // Para juntar utilidades de botones

  handleClick = (value) => {
    if (value === 'C') {
      this.props.clear();
    } else if (value === '=') {
      this.props.equal();
    } else if ('0123456789'.includes(value)) {
      this.props.number(value);
    } else {
      this.props.operator(value);
    }
  }

  render() {
    return (
      <Fragment>
        <div className="Calculator">
          <div className="CalculatorName">🐰Piwi🐰</div>
          <Display value={ this.props.display }
            display={ this.props.result || this.props.secondNumber || this.props.firstNumber } />
          <ButtonPannel onClick={ this.handleClick }
          />
          <div className="CalculatorBrand" >Laura Vargas</div>
        </div><Link to="/">Home</Link>
      </Fragment>
    );
  }

}

const mapDispatchToProps = dispatch => ({
  clear: () => dispatch(clickClear()),
  equal: () => dispatch(clickEqual()),
  number: (value) => dispatch(clickNumber(value)),
  operator: (value) => dispatch(clickOperator(value))
});

const mapStateToProps = (state) => ({
  display: state.Calculator.display,
  firstNumber: state.Calculator.firstNumber,
  secondNumber: state.Calculator.secondNumber,
  result: state.Calculator.result
});


export default connect(mapStateToProps, mapDispatchToProps)(Calculator);