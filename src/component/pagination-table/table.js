import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TextField from '../text-field/text-field';
import CheckBox from '../checkbox/checkbox';
import Button from '../button/button';
import DropDownField from '../drop-down/drop-down-field';
import * as Constants from '../../utils/constant';

const {
    ParentWrapper,
    MenuBarWrapper,
    TableWrapper
} = require('./styles');

const Table = ({ items }) => {
    const [tableData, setTableData] = useState(items);

    useEffect(() => {
        setTableData(items);
    }, [items])

    const performEditOperation = (e, rowId) => {
        e.preventDefault();

        const { name } = e.target;
        console.log(name, rowId)
    };

    const performDeleteOperation = (e, rowId) => {
        e.preventDefault();
        const filteredList = tableData.filter(item => item.id !== rowId);
        setTableData(filteredList);
    };

    const handleCheckBoxChange = (e, rowId) => {
        e.stopPropagation()

        const { checked } = e.target;
        console.log(checked, rowId);
    };


    return (
        <TableWrapper>
            <table>
                <tr>
                    <th><CheckBox /></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                </tr>
                {
                    tableData.map((item, index) =>
                        <tr key={index}>
                            <td><CheckBox onChange={(e) => handleCheckBoxChange(e, item.id)} /></td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.role}</td>
                            <td>
                                <Button name="edit" value="edit" onClick={(e) => performEditOperation(e, item.id)} />
                                <Button name="delete" value="delete" onClick={(e) => performDeleteOperation(e, item.id)} />
                            </td>
                        </tr>
                    )
                }
            </table>
        </TableWrapper>
    )
};

const TableComponent = ({ items = [] }) => {
    const [initialTableData, setInitialTableData] = useState(items);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [filterType, setFilterType] = useState('');

    const handleInputChange = (e) => {
        e.preventDefault();

        const { value } = e.target;
        setSearchKeyword(value);
    };

    const handleSearchOperation = (e) => {
        e.preventDefault();

        const filteredResult = items.filter(item => item[filterType] === searchKeyword);
        setInitialTableData(filteredResult);
    };

    const handleRestOperation = (e) => {
        e.preventDefault();
        setInitialTableData(items);
        setSearchKeyword('');
        setFilterType('');

    };

    const getDropDownFieldvalue = (e) => {
        e.preventDefault();
        const { value } = e.target;
        setFilterType(value);
    };

    return (
        <ParentWrapper>
            <MenuBarWrapper>
                <DropDownField name="search-filter" items={Constants.SearchFilterOption} onChange={getDropDownFieldvalue} />
                <TextField name="search" value={searchKeyword} placeholder="search" onChange={handleInputChange} />
                <Button name="search" onClick={handleSearchOperation} />
                <Button name="reset" onClick={handleRestOperation} />
            </MenuBarWrapper>
            <Table items={initialTableData} />
        </ParentWrapper>
    )
};

TableComponent.propTypes = {
    items: PropTypes.array.isRequired
};

export default TableComponent;