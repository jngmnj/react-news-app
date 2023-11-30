import styled from "styled-components";
import colors from "../../styles/colors";

export const CategoriesBlock = styled.div`
    display: flex;
    padding: 1rem;
    width: 758px;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
        width: 100px;
        overflow-x: auto;
    }
`

export const Category = styled.div`
    font-size: 1.125rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: inherit;
    padding-bottom: 0.25rem;

    &:hover {
        color: ${colors.alto[500]}
    }

    ${props => 
        props.active && `
        font-weight: 600;
        border-bottom: 2px solid #22b8cf;
        color: #22b8cf;
        &:hover {
            color: #3bc9db;
        }
    `}
    & + & {
        margin-left: 1rem;
    }
`;
