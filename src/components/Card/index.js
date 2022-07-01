import React from "react";
import PropTypes from "prop-types";

import { Avatar } from "components/Avatar";
import { Text } from "components/Text";
import { StylesCard, StylesCardInfo } from "./styles";
import { Button } from "components/Button";

export const Card = ({
  title,
  price,
  currency_id: currencyId,
  available_quantity: availableQuantity,
  thumbnail,
  condition
}) => {
  return (
    <StylesCard>
      <Avatar width="100px" height="100px" src={thumbnail} alt={`Avatar del producto ${title}`}/>
      <StylesCardInfo>
        <Text color="neutro" type="span" variant="middle" >{title}</Text>
        { 
          availableQuantity &&
          <Text variant="small">{`stock - ${availableQuantity}`}</Text>
        }
        <Button size="small">{`${price} ${currencyId}`}</Button>
      </StylesCardInfo>
    </StylesCard>
  );
};

Card.defaultProps = {
  title: "producto",
  price: 0,
  currency_id: "MX",
  available_quantity: 100,
  thumbnail: "/svg/search.svg",
  condition: "new",
};

Card.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  currency_id: PropTypes.string,
  available_quantity: PropTypes.number,
  thumbnail: PropTypes.string,
  condition: PropTypes.string,
};