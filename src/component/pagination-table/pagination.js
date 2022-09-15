import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TextField from '../text-field/text-field';
import Table from '../table/table';
import Button from '../button/button';
import DropDownField from '../drop-down/drop-down-field';
import * as Constants from '../../utils/constant';

const {
    ParentWrapper,
    MenuBarWrapper,
    PaginationComponentParentWrapper
} = require('./styles');

/**
 * 
 * @param {Array} items - list of all table rows
 *  
 * @returns React Element<div>
 */
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
            <PaginationComponentParentWrapper data-testid="table-component">
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
                <Button name="Search" onClick={handleSearchOperation} />
                <Button name="Reset" onClick={handleResetOperation} />
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
