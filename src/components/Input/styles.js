import styled from "styled-components";

export const StylesInput = styled.input`
    color: ${({ theme }) => theme.colors.primaryDark};
    padding: 10px;
    width: 100%;
    border: solid 2px ${({ theme }) => theme.colors.secondary};
    background: ${({ theme }) => theme.colors.neutro};
    font-size: ${({ theme}) => theme.fonts.small.size};
`;