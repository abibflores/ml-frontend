import styled from "styled-components";

export const StylesFooter = styled.footer`
    display: flex;
    justify-content: center;
    gap: 20px;
    background: ${({theme}) => theme.colors.primaryDark};
    width: 100%;
    align-items: center;
    padding: 10px 0px;
`;