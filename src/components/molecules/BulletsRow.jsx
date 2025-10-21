import React from "react";
import { Row, Col } from "layout";
import Bullet from "components/Bullet";

export default function BulletsRow({ data }) {
  const { bullets, theme, max } = data;
  const totalCols = max || bullets.length;

  // Fill in empty columns if bullets < totalCols
  const filledBullets = [
    ...bullets,
    ...Array(Math.max(totalCols - bullets.length, 0)).fill(null),
  ];

  return (
    <Row>
      {filledBullets.map((item, i) => (
        <Col key={i}>
          {item ? <Bullet data={item} theme={theme} /> : <Col />}
        </Col>
      ))}
    </Row>
  );
}
