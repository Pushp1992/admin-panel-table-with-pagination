import React from 'react';
import PropTypes from 'prop-types';

/**
 * SearchBar component
 * 
 * @param {string} placeholder - dummy text in the input search bar by default 
 * @param {string} name - name attributes in the input search bar by default 
 * @param {string} value - value attributes in the input search bar by default 
 * @param {Function} onChange - capture the inserted inout text at every input change
 * 
 * @returns {ReactElement} div 
 */

const TextField = ({
    placeholder,
    name,
    value,
    onChange
}) => {
    return (
        <input data-testid="text-field" type="text" name={name} value={value} placeholder={placeholder} onChange={onChange} />
    )
};

TextField.propTypes = {
    placeholder: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func

};

TextField.displayName = 'TextField';

export default TextField;
