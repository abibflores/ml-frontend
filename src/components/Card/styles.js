import styled from "styled-components";

export const StylesCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px 10px;
    background: ${({ theme }) => theme.colors.primary};
    min-width: 350px;
    align-items: center;
    justify-content:center;
    padding: 20px 0px;
    max-width: 300px;
`;

export const StylesCardInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px 0px;
    justify-content: center;
    align-items: center;
    min-width: 100%;
`;
