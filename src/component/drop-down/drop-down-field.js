import React from 'react';
import PropTypes from 'prop-types';

import {
    DropDownWrapper
} from './styles';


const DropDownField = ({
    items,
    itemType,
    onChange
}) => {
    return (
        <DropDownWrapper>
            {
                !!items.length &&
                <select name={itemType} onChange={onChange}>
                    {
                        items.map((item) =>
                            <option key={item.id} value={item.value}>{item.name}</option>
                        )
                    }
                </select>
            }
        </DropDownWrapper>
    )
}

DropDownField.propTypes = {
    items: PropTypes.array,
    itemType: PropTypes.string,
    onChange: PropTypes.func
};

DropDownField.displayName = "DropDownField";

export default DropDownField;
