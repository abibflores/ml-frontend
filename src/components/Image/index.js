import React from "react";
import PropTypes from "prop-types";

export const Img = ({ src, alt, height, width }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img alt={alt} height={height} src={src} width={width} loading="lazy" />
);

Img.defaultProps = {
  alt: "Ml Search",
  height: 45,
  width: 45,
};

Img.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};