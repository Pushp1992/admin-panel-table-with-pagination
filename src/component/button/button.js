import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
    name,
    onClick,
    value,
    disabled
}) => {
    return(
        <button value={value} disabled={disabled} onClick={onClick}>{name}</button>
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
