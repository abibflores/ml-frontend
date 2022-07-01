import React from "react";
import { Avatar } from "components/Avatar";

import { ContHeaderStyle } from "./styles";

export const Header = () => {
  return(
    <ContHeaderStyle>
      <Avatar src="/svg/shopping.svg" alt="logo ML Search" />
    </ContHeaderStyle>
    
  );
};