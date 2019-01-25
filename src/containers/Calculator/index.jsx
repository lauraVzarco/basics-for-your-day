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

const numberSelected = new RegExp(/([0-9]+)/g);

class Calculator extends Component {
  static propTypes = {
    value: PropTypes.number,
    display: PropTypes.string,
    clear: PropTypes.func,
    equal: PropTypes.func,
    number: PropTypes.func,
    operator: PropTypes.func,
    firstOperationNumber: PropTypes.string,
    secondOperationNumber: PropTypes.string,
    result: PropTypes.string
  }

  // Para juntar utilidades de botones
  handleClick = (value) => {
    if (value === 'C') {
      this.props.clear();
    } else if (value === '=') {
      this.props.equal();
      // TODO change to regex expresion regulá
    } else if (value.match(numberSelected)) {
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
            display={ this.props.result || this.props.secondOperationNumber || this.props.firstOperationNumber } />
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
  firstOperationNumber: state.Calculator.firstOperationNumber,
  secondOperationNumber: state.Calculator.secondOperationNumber,
  result: state.Calculator.result
});


export default connect(mapStateToProps, mapDispatchToProps)(Calculator);