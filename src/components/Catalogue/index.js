import React from "react";
import PropTypes from "prop-types";
import { Card } from "components/Card";
import { StylesCatalogue } from "./styles";

export const Catalogue = ({ data }) => {
  return (
    <StylesCatalogue>
      {
        data?.length > 0 && data.map(item => <Card key={item.id} {...item} />)
      }
    </StylesCatalogue>
  );
};

Catalogue.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};