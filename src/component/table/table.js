import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TextField from '../text-field/text-field';
import CheckBox from '../checkbox/checkbox';
import Button from '../button/button';

const {
    TableWrapper,
    DeleteAllButtonWrpper,
    TableRowWrapper,
} = require('./styles');

/**
 * 
 * @param {Array} items - list of all table rows
 *  
 * @returns React Element<div>
 */
const Table = ({ items }) => {
    const [rowData, setRowData] = useState([
        { name: '', email: '', role: '' }
    ]);
    const [tableData, setTableData] = useState([]);
    const [selectedItemsId, setSelectedItemsId] = useState([]);
    const [currentRowId, setCurrentRowId] = useState('');
    const [isSingleRowSelected, setIsSingleRowSelected] = useState(false);
    const [isEditModeOn, setIsEditModeOn] = useState(false);
    const [currentRowIndex, setCurrentRowIndex] = useState(null)

    useEffect(() => {
        setTableData(items);
    }, [items])

    const performEditOperation = (e, rowIndex) => {
        e.preventDefault();
        setIsEditModeOn(!isEditModeOn);
        setCurrentRowIndex(rowIndex);
    };

    const handleInputChange = (e, index) => {
        e.preventDefault();
        const { name, value } = e.target;
        const list = [...tableData];
        list[index][name] = value;
        setRowData(list);
    };

    const performDeleteOperation = (e, rowId) => {
        e.preventDefault();
        let filteredList;

        if (rowId) filteredList = tableData.filter(item => item.id !== rowId);
        else {
            filteredList = tableData.filter(item => !selectedItemsId.includes(item.id));
            document.getElementsByClassName('select-all')[0].checked = false;
            setSelectedItemsId(filteredList);
        }
        setTableData(filteredList);
    };

    const performActionOnSelectAllBtn = (e, isSelectAllBtnIsChecked) => {
        const checkBoxes = document.getElementsByClassName("select-one");
        let selectedItemsId = [];

        for (let item of checkBoxes) {
            if (isSelectAllBtnIsChecked) {
                item.checked = e.target.checked;
                selectedItemsId.push(item.id);
            } else {
                item.checked = e.target.checked;
                selectedItemsId.length = 0;
            }
        };
        setSelectedItemsId(selectedItemsId);
    };

    const handleCheckBoxChange = (e, rowId) => {
        e.stopPropagation();

        const { checked } = e.target;
        if (rowId) {
            setIsSingleRowSelected(checked);
            setCurrentRowId(rowId);
            // todo: what if single row is selected
        } else {
            performActionOnSelectAllBtn(e, checked);
        }
    };

    return (
        <TableWrapper>
            <DeleteAllButtonWrpper selectedItemsId={selectedItemsId}>
                {
                    !!selectedItemsId.length &&
                    <Button name="Delete All" value="delete" onClick={(e) => performDeleteOperation(e)} />
                }
            </DeleteAllButtonWrpper>
            <table data-testid="table">
                <tr data-testid="table-head">
                    <th><CheckBox className="select-all" onChange={handleCheckBoxChange} /></th>
                    <th>#Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                </tr>
                {
                    tableData.map((item, index) =>
                        <TableRowWrapper key={index} id={item.id} rowId={currentRowId} isSingleRowSelected={isSingleRowSelected}>
                            <td><CheckBox className="select-one" id={item.id} onChange={(e) => handleCheckBoxChange(e, item.id)} /></td>
                            <td>{item.id}</td>

                            <td>
                                {
                                    isEditModeOn && (index === currentRowIndex) ?
                                    <TextField name="name" value={rowData.name || item.name} onChange={(e) => handleInputChange(e, index)} />
                                    :
                                    <span>{rowData.name || item.name}</span>
                                }
                            </td>
                            <td>
                                {
                                    isEditModeOn && (index === currentRowIndex) ?
                                    <TextField name="email" value={rowData.email || item.email} onChange={(e) => handleInputChange(e, index)} />
                                    :
                                    <span>{rowData.email || item.email}</span>
                                }
                            </td>
                            <td>
                                {
                                    isEditModeOn && (index === currentRowIndex) ?
                                    <TextField name="role" value={rowData.role || item.role} onChange={(e) => handleInputChange(e, index)} />
                                    :
                                    <span>{rowData.role || item.role}</span>
                                }
                            </td>
                            <td>
                                <Button name={ isEditModeOn && (index === currentRowIndex) ? 'Save': 'Edit'} value="edit" onClick={(e) => performEditOperation(e, index)} />
                                {
                                    !selectedItemsId.length &&
                                    <Button name="Delete" value="delete" onClick={(e) => performDeleteOperation(e, item.id)} />
                                }

                            </td>
                        </TableRowWrapper>
                    )
                }
            </table>
        </TableWrapper>
    )
};


Table.propTypes = {
    items: PropTypes.array.isRequired
};

export default Table;