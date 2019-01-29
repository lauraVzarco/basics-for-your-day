import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import './Calculator.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ButtonPannel from './Components/ButtonPannel';
import Display from './Components/Display';
import {
  pressClear, pressEqual, pressNumber, clickOperator
} from './actions';

const numberSelected = new RegExp(/([0-9]+)/g);

class Calculator extends Component {
  static propTypes = {
    value: PropTypes.number,
    display: PropTypes.number,
    clear: PropTypes.func,
    equal: PropTypes.func,
    number: PropTypes.func,
    operator: PropTypes.func,
    firstOperationNumber: PropTypes.number,
    secondOperationNumber: PropTypes.number,
    result: PropTypes.number
  }

  // Para juntar utilidades de botones
  handleClick = (value) => {
    if (value === 'C') {
      this.props.clear();
    } else if (value === '=') {
      this.props.equal();
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
            // eslint-disable-next-line max-len
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
  clear: () => dispatch(pressClear()),
  equal: () => dispatch(pressEqual()),
  number: (value) => dispatch(pressNumber(value)),
  operator: (value) => dispatch(clickOperator(value))
});

const mapStateToProps = (state) => ({
  display: state.Calculator.display,
  firstOperationNumber: state.Calculator.firstOperationNumber,
  secondOperationNumber: state.Calculator.secondOperationNumber,
  result: state.Calculator.result
});


export default connect(mapStateToProps, mapDispatchToProps)(Calculator);