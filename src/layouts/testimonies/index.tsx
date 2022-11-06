import { useEffect, useState } from "react";
import Container from "../../components/Container";
import TestimonyBack from "./assets/testimony-back.png";
import Testimonial from "./Testimonial";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export default function Testimonies() {
  const [selected, setSelected] = useState(0);

   const [parent] = useAutoAnimate<HTMLDivElement>();

  return (
    <Container
      className="bg-no-repeat bg-cover flex flex-col justify-between mb-12"
      style={{ backgroundImage: `url${TestimonyBack.src}` }}
    >
      <article className="flex gap-2 mb-10 items-center">
        <div className="border-b border-b-[#9FA19C] flex-auto" />
        <div className="flex flex-col px-8 items-center">
          <h4 className="text-[#343434] font-normal text-[1.5rem] leading-8">
            What our Students
          </h4>
          <h2 className="font-bold text-[3rem] leading-[3.5rem]">Are Saying</h2>
        </div>
        <div className="border-b border-b-[#9FA19C] flex-auto" />
      </article>
      <Testimonial selected={selected} />
      
      <button
        className="p-4 mt-10 leading-6 text-white self-center"
        style={{
          background:
            "linear-gradient(168.79deg, #E1261C 28.64%, #8A0B04 136.7%)",
          borderRadius: "8px",
        }}
      >
        More Testimonies
      </button>
    </Container>
  );
}
