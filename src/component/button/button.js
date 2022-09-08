import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
    name,
    onClick,
    value
}) => {
    return(
        <button value={value} onClick={onClick}>{name}</button>
    )
};

Button.propTypes = {
    name: PropTypes.string,
    onClick: PropTypes.func,
    value: PropTypes.string
};

Button.displayName = 'ButtonComponent';

export default Button;
