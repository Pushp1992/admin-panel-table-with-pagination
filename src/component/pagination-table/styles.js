const { default: styled } = require('styled-components');

const ParentWrapper = styled.div.withConfig({
    displayName: "ParentWrapper"
})`
min-width: 50rem;
`;

const MenuBarWrapper = styled.div.withConfig({
    displayName: "MenuBarWrapper"
})`
/* padding-bottom: 5rem; */
padding: 2rem 0rem;
background-color: #3c1760;
display: flex;
flex-direction: row;
justify-content: flex-end;
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
    PaginationComponentParentWrapper
};