import Card from "./Card";
import empathy_initial from "./assets/empathy/initial.png";
import empathy_final from "./assets/empathy/final.png";
import excellence_initial from "./assets/excellence/excell-initial.png";
import excellence_final from "./assets/excellence/excell-final.png";
import execution_initial from "./assets/execution/initial.png";
import execution_final from "./assets/execution/final.png";
import Container from "../../../components/Container";
import { useEffect, useState, useRef } from "react";

const CORE_VALUES = [
  {
    initial_mesh: execution_initial,
    final_mesh: execution_final,
    title: "Execution",
    subtitle: "we deliver",
  },
  {
    initial_mesh: excellence_initial,
    final_mesh: excellence_final,
    title: "Excellence",
    subtitle: "we deliver results",
  },
  {
    initial_mesh: empathy_initial,
    final_mesh: empathy_final,
    title: "Empathy",
    subtitle: "we deliver results humanely",
  },
];

function OurValues() {
  const scrollRefs = useRef<HTMLDivElement>(null);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    setScroll(true);
    const width = scrollRefs.current!.clientWidth;
    if (scroll === true) {
      setInterval(() => {
        if (scrollRefs.current!.scrollWidth < 818) {
          scrollRefs.current!.scrollLeft =
            scrollRefs.current!.scrollLeft + width / 2;
        } else if (scrollRefs.current!.scrollWidth > 800) {
          scrollRefs.current!.scrollLeft =
            scrollRefs.current!.scrollLeft - width;
        }
      }, 3000);
    }
  });
  return (
    <Container className="flex flex-col justify-center items-center gap-8 pt-10">
      <h2 className="font-bold text-[clamp(2rem,3vw,3.5rem)] text-[#313131] pt-8 align-middle leading-[3rem]">
        Our Values
      </h2>
      <div className="hidden md:grid md:items-center md:justify-center md:w-full md:grid-cols-3 gap-10 pt-8 duration-300 ease-in-out">
        {CORE_VALUES.map((props, idx) => (
          <Card key={idx} {...props} />
        ))}
      </div>
      <div
        ref={scrollRefs}
        className="grid grid-flow-col scrollbar-hide overflow-x-auto items-center w-full duration-300 ease-in-out gap-10 pt-8 md:hidden"
      >
        {CORE_VALUES.map((props, idx) => (
          <Card key={idx} {...props} />
        ))}
      </div>
    </Container>
  );
}

export default OurValues;
