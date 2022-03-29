import React from "react";
// import './styles.css';
import { Card } from "semantic-ui-react";

const CardExampleCard = ({ weatherData }) => (
  <Card>
    <Card.Content>
      <Card.Header className="header">{weatherData.name}</Card.Header>
      <Card.Header className="header">
        {"Tempratuer: "}
        {weatherData?.main?.temp}
      </Card.Header>
    </Card.Content>
  </Card>
);

export default CardExampleCard;
