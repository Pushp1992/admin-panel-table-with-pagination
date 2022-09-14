const { default: styled, css } = require('styled-components');

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

export {
    TableWrapper,
    TableRowWrapper,
    DeleteAllButtonWrpper
};
