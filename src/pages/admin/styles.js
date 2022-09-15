const { default: styled } = require('styled-components');

const AdminPanelWrapper = styled.div.withConfig({
    displayName: "AdminPanelWrapper"
})`
display: grid;
justify-content: center;
grid-column: auto;
margin: 4rem;
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
    AdminPanelWrapper,
    MenuBarWrapper
};
