import styled from "styled-components";

export const StylesText = styled.h1`
  color: ${({ theme, color = "primaryDark" }) => theme.colors[color]};
  font-size: ${({ theme, variant }) => theme.fonts[variant].size};
  font-weight: ${({ theme, variant }) => theme.fonts[variant].weight};
  text-align: center;
  text-overflow: "-";
`;
