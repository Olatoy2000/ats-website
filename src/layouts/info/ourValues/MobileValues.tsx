import { Carousel } from "@mantine/carousel";
import React from "react";
import Card from "./Card";
import CORE_VALUES from "./CoreValues";

function MobileValues() {
  return (
    <Carousel
      className="w-28 h-28"
     styles={{root: {}}}
      mx="auto"
      loop
      withControls={false}
      draggable
      speed={20}
      slideGap={50}
    >
      {CORE_VALUES.map((props, idx) => (
        <Carousel.Slide key={idx}>
          <Card {...props} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}

export default MobileValues;
