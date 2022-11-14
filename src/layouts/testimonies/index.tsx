import { useEffect, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import Container from "../../components/Container";
import TestimonyBack from "./assets/testimony-back.png";
import Testimonial from "./Testimonial";

export default function Testimonies() {
  const [selected, setSelected] = useState(0);

  const [parent] = useAutoAnimate<HTMLDivElement>();

  return (
    <Container
      className="flex flex-col justify-between mb-12 "
      style={{
        backgroundImage: `url(${TestimonyBack.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "25%",
      }}
    >
      <article className="flex items-center gap-2 mb-10">
        <div className="border-b border-b-[#9FA19C] flex-auto" />
        <div className="flex flex-col items-center px-8">
          <h4 className="text-[#343434] font-normal text-[1.5rem] leading-8">
            What our Students
          </h4>
          <h2 className="font-bold text-[3rem] leading-[3.5rem]">Are Saying</h2>
        </div>
        <div className="border-b border-b-[#9FA19C] flex-auto" />
      </article>
      <Testimonial selected={selected} />
    </Container>
  );
}
