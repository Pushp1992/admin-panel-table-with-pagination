import React from 'react';
import PropTypes from 'prop-types';

/**
 * 
 * @param {String} name - list of all table rows
 * @param {Function} onClick - click cebent
 * @param {String} value - button value
 * @param {Boolean} disabled - flag to enable/disable button
 *  
 * @returns React Button Element
 */
const Button = ({
    name,
    onClick,
    value,
    disabled
}) => {
    return(
        <button data-testid="button" value={value} disabled={disabled} onClick={onClick}>{name}</button>
    )
};

Button.propTypes = {
    disabled: PropTypes.bool,
    name: PropTypes.string,
    onClick: PropTypes.func,
    value: PropTypes.string
};

Button.displayName = 'ButtonComponent';

export default Button;
