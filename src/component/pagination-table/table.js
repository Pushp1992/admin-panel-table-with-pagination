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
    TableWrapper,
    DeleteAllButtonWrpper,
    TableRowWrapper,
    PaginationComponentParentWrapper
} = require('./styles');

const Table = ({ items }) => {
    const [tableData, setTableData] = useState(items);
    const [selectedItemsId, setSelectedItemsId] = useState([]);
    const [currentRowId, setCurrentRowId] = useState('');
    const [isSingleRowSelected, setIsSingleRowSelected] = useState(false);

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
                    <Button name="delete all" value="delete" onClick={(e) => performDeleteOperation(e)} />
                }
            </DeleteAllButtonWrpper>
            <table>
                <tr>
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
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.role}</td>
                            <td>
                                <Button name="edit" value="edit" onClick={(e) => performEditOperation(e, item.id)} />
                                {
                                    !selectedItemsId.length &&
                                    <Button name="delete" value="delete" onClick={(e) => performDeleteOperation(e, item.id)} />
                                }

                            </td>
                        </TableRowWrapper>
                    )
                }
            </table>
        </TableWrapper>
    )
};

const TableComponent = ({ items = [] }) => {
    const [initialTableData, setInitialTableData] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [filterType, setFilterType] = useState('');

    const [currentPage, setcurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    const [pageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(6);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

    useEffect(() => {
        setInitialTableData(items);
    }, [])

    const handleCurrentPage = (event) => {
        setcurrentPage(Number(event.target.id));
    };

    // Logic to handle all pagination activities
    const PageList = new Array(Math.ceil(initialTableData.length / itemsPerPage));
    const pageCountList = [...PageList.keys()];
    pageCountList.shift();

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = initialTableData.slice(indexOfFirstItem, indexOfLastItem);

    // Logic to display page number button e.g 1,2,3
    const renderPageNumbers = pageCountList.map((currentPageNumber) => {
        return (
            (currentPageNumber < maxPageNumberLimit + 1 && currentPageNumber > minPageNumberLimit) &&
            <li
                key={currentPageNumber}
                id={currentPageNumber}
                onClick={handleCurrentPage}
                className={currentPage === currentPageNumber ? "active" : null}
            >
                {currentPageNumber}
            </li>
        )
    });

    const handleNextbtn = () => {
        setcurrentPage(currentPage + 1);

        if (currentPage + 1 > maxPageNumberLimit) {
            setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    };

    const handlePrevbtn = () => {
        setcurrentPage(currentPage - 1);

        if (!(currentPage - 1) % pageNumberLimit) {
            setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    };

    const PaginationComponent = () => {
        return (
            <PaginationComponentParentWrapper>
                <Button name="prev" disabled={currentPage === pageCountList[0] ? true : false} onClick={handlePrevbtn} />

                {minPageNumberLimit >= 1 &&
                    <Button name="&hellip;" onClick={handlePrevbtn} />
                }

                {renderPageNumbers}

                {pageCountList.length > maxPageNumberLimit &&
                    <Button name="&hellip;" onClick={handleNextbtn} />
                }

                <Button name="next" disabled={currentPage === pageCountList[pageCountList.length - 1] ? true : false} onClick={handleNextbtn} />


            </PaginationComponentParentWrapper>
        )
    };

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

    const handleResetOperation = (e) => {
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
                <Button name="reset" onClick={handleResetOperation} />
            </MenuBarWrapper>
            <Table items={currentItems} />
            <PaginationComponent />
        </ParentWrapper>
    )
};

TableComponent.propTypes = {
    items: PropTypes.array.isRequired
};

export default TableComponent;
