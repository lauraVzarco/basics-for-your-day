/* eslint-disable react/prop-types */
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
    display: PropTypes.number,
    clear: PropTypes.func,
    equal: PropTypes.func,
    number: PropTypes.func
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
          <div className="Calculator-Name">🐰Piwi🐰</div>
          <Display value={ this.props.display } />
          <ButtonPannel onClick={ this.handleClick }
          />
          <div className="Calculator-Brand" >Laura Vargas</div>
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

});


export default connect(mapStateToProps, mapDispatchToProps)(Calculator);