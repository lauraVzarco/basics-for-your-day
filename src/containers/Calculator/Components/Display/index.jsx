import React from 'react';
import PropTypes from 'prop-types';
import './Display.css'

const propTypes = {
    value: PropTypes.string
}
const defaultProps = {
    value: ''
}

const Display = (props) => (
    <div className="Display">
        < div className="Display-content" >
            {props.value}
        </div >
    </div>

)

Display.propTypes = propTypes;
Display.defaultProps = defaultProps;

export default Display;