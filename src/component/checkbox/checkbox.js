import React from 'react';
import PropTypes from 'prop-types';

const CheckBox = ({
    id,
    name,
    value,
    onChange
}) => {
    return (
        <>
            <input type="checkbox" id={id} name={name} value={value} onChange={onChange} />
            <label htmlFor={name}>{name}</label>
        </>
    )
};

CheckBox.propTypes = {
    id: PropTypes.any,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
};

CheckBox.displayName = 'CheckBoxComponent';

export default CheckBox;
