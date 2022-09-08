const { default: styled } = require('styled-components');

const TableWrapper = styled.div.withConfig({
    displayName: "TableWrapper"
})`
background-color: azure;
`;

const MenuBarWrapper = styled.div.withConfig({
    displayName: "MenuBarWrapper"
})`
background-color: aliceblue;
display: flex;
flex-direction: row;
justify-items: flex-end;
`;


export {
    TableWrapper,
    MenuBarWrapper
};