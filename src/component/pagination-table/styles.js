const { default: styled } = require('styled-components');

const ParentWrapper = styled.div.withConfig({
    displayName: "ParentWrapper"
})`
background-color: whitesmoke;
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


export {
    ParentWrapper,
    MenuBarWrapper,
    TableWrapper
};