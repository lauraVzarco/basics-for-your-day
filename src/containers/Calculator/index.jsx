import React, { Component, Fragment } from 'react';
import Display from './Components/Display';
import ButtonPannel from './Components/ButtonPannel';
import PropTypes from 'prop-types';
import './Calculator.css';
import { Link } from 'react-router-dom'

import { connect } from 'react-redux';
import { clickClear, clickEqual, clickNumber } from './actions';


class Calculator extends Component {
    static propTypes = {
        display: PropTypes.string,
        result: PropTypes.boolean,
        clear: PropTypes.func,
        equal: PropTypes.func,
        number: PropTypes.func
    }

    // Para juntar utilidades de botones

    handleClick = (value) => {
        if (value === "C") {
            this.props.clear()
        } else if (value === "=") {
            this.props.equal()
        }
        else {
            if (this.props.result === true) {
                this.props.clear()
            } else {
                this.props.number(value)
            }
        }
    }
    render() {
        return (
            <Fragment>
                <div className="Calculator">
                    <div className="Calculator-Name">🐰Piwi🐰</div>
                    <Display value={this.props.display} />
                    <ButtonPannel onClick={this.handleClick}
                    />
                    <div className="Calculator-Brand" >Laura Vargas</div>
                </div><Link to='/'>Home</Link>
            </Fragment>
        );
    }

}

const mapDispatchToProps = dispatch => ({
    clear: () => dispatch(clickClear()),
    equal: () => dispatch(clickEqual()),
    number: (value) => dispatch(clickNumber(value))
})

const mapStateToProps = (state) => {
    return {
        display: state.Calculator.display,
        result: state.Calculator.result
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Calculator);