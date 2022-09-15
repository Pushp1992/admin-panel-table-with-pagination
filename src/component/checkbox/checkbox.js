import React from 'react';
import PropTypes from 'prop-types';

const CheckBox = ({
    id,
    name,
    value,
    onChange,
    className
}) => {
    return (
        <>
            <input data-testid="checkbox" type="checkbox" id={id} name={name} className={className} value={value} onChange={onChange} />
            <label htmlFor={name}>{name}</label>
        </>
    )
};

CheckBox.propTypes = {
    id: PropTypes.any,
    className: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
};

CheckBox.displayName = 'CheckBoxComponent';

export default CheckBox;
