const { default: styled } = require('styled-components');

const AdminPanelWrapper = styled.div.withConfig({
    displayName: "AdminPanelWrapper"
})`
display: grid;
grid-column: auto;
background-color: whitesmoke;
margin: 4rem;
min-height: 70vh;
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
