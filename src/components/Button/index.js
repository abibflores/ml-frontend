import React from "react";
import PropTypes from "prop-types";

import { StylesButton } from "./styles";

export const Button = ({ children, onClick }) => (
  <StylesButton onClick={() => onClick()}>
    {children}
  </StylesButton>
);

Button.defaultProps = {
  onClick: () => {},
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};