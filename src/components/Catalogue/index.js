import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card } from "components/Card";
import { StylesCatalogue } from "./styles";
import { Button } from "components/Button";

export const Catalogue = ({ data }) => {
  const [page, setPage] = useState(10);
  return (
    <>
      <StylesCatalogue>
        {
          (data?.length > 0) && data.map((item, index) => (index < page) && <Card key={item.id} {...item} />)
        }
      </StylesCatalogue>
      {
        data?.length > page && <Button onClick={() => setPage(page + 10)} >Ver más</Button>
      }
      
    </>

  );
};

Catalogue.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};