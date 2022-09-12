const { default: styled, css } = require('styled-components');

const ParentWrapper = styled.div.withConfig({
    displayName: "ParentWrapper"
})`
/* background-color: whitesmoke; */
`;

const MenuBarWrapper = styled.div.withConfig({
    displayName: "MenuBarWrapper"
})`
padding-bottom: 5rem;
background-color: #3c1760;
display: flex;
flex-direction: row;
justify-content: flex-end;
`;

const TableWrapper = styled.div.withConfig({
    displayName: "TableWrapper"
})`
background-color: whitesmoke;
`;

const TableRowWrapper = styled.tr.withConfig({
    displayName: "TableRowWrapper"
})`
background-color: white;

${({isSingleRowSelected, id, rowId}) =>
    (isSingleRowSelected && id === rowId) &&
    css`
     background-color: grey;
    `}
`;

const DeleteAllButtonWrpper = styled.div.withConfig({
    displayName: "DeleteAllButtonWrpper"
})`
max-width: 5rem;

${({selectedItemsId}) => 
    !!selectedItemsId.length &&
    css`
    margin: 2rem 0;
    `}
`;

const PaginationComponentParentWrapper = styled.div.withConfig({
    displayName: "PaginationComponentParentWrapper"
})`
padding-top: 2rem;
list-style: none;
display: grid;
align-content: space-between;
justify-content: space-evenly;
align-items: center;
justify-items: center;
grid-auto-flow: column;
/* flex-direction: row; */

li {
    display: flex;
    justify-content: inherit;
    
    cursor: pointer;
    background-color: brown;
    min-width: 2rem;
    color: white;
}
`;


export {
    ParentWrapper,
    MenuBarWrapper,
    TableWrapper,
    TableRowWrapper,
    DeleteAllButtonWrpper,
    PaginationComponentParentWrapper
};