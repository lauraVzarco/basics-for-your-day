import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/index.jsx';

class ButtonPannel extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    name: PropTypes.string
  }

  static defaultProps = {
    name: ''
  }

  render() {
    const {
      onClick,
    } = this.props;
    return (
      <Fragment>
        <div>
          <Button className="Button-number" name="7" onClick={ onClick } />
          <Button className="Button-number" name="8" onClick={ onClick } />
          <Button className="Button-number" name="9" onClick={ onClick } />
          <Button className="Button-operation" name="/" onClick={ onClick } />
        </div>
        <div>
          <Button className="Button-number" name="4" onClick={ onClick } />
          <Button className="Button-number" name="5" onClick={ onClick } />
          <Button className="Button-number" name="6" onClick={ onClick } />
          <Button className="Button-operation" name="*" onClick={ onClick } />
        </div>
        <div>
          <Button className="Button-number" name="1" onClick={ onClick } />
          <Button className="Button-number" name="2" onClick={ onClick } />
          <Button className="Button-number" name="3" onClick={ onClick } />
          <Button className="Button-operation" name="-" onClick={ onClick } />
        </div>
        <div>
          <Button className="Button-number" name="0" onClick={ onClick } />
          <Button className="Button-clear" name="C" onClick={ onClick } />
          <Button className="Button-equal" name="=" onClick={ onClick } />
          <Button className="Button-operation" name="+" onClick={ onClick } />
        </div>
      </Fragment>
    );
  }
}

export default ButtonPannel;