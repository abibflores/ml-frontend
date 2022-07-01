import styled from "styled-components";

export const StylesAvatar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: ${({ width }) => width};
    height: ${({ height }) => height};
`;