import { Img } from "components/Image";
import React from "react";
import PropTypes from "prop-types";

import { StylesAvatar } from "./styles";

export const Avatar = ({ src, alt, height, width }) => (
  <StylesAvatar height={height} width={width}>
    <Img src={src} alt={alt} height={height} width={width} />
  </StylesAvatar>
);

Avatar.defaultProps = {
  alt: "ML Search",
  height: 45,
  width: 45,
  className: "",
};
  
Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};