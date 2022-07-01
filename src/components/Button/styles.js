import styled from "styled-components";

export const StylesButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border: solid 2px ${({theme}) => theme.colors.secondary };
    background: ${({theme}) => theme.colors.secondary };
    color: ${({theme}) => theme.colors.neutro};
    font-size: ${({theme}) => theme.fonts.small.size};
    font-weight: ${({theme}) => theme.fonts.small.weight};
`;