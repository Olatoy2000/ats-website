import Abraham from "./assets/abraham.png";
import Samuel from "./assets/samuel.png";
import Blessing from "./assets/blessing.png";
import Davies from "./assets/davies.png";
import Busola from "./assets/busola.png";

import { CSSProperties, useState } from "react";
import { StaticImageData } from "next/image";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { clsx } from "@mantine/core";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";

type Testimony = Array<{
  testimony: string;
  style?: CSSProperties;
  picture: StaticImageData;
  name: string;
  title: string;
}>;

const testimony: Testimony = [
  {
    testimony:
      "I have always dreamed of making cool, new projects while working as a startup. ATS makes this dream a reality and I would highly recommend this to young developers out there.",
    picture: Samuel,
    name: "Samuel",
    style: { objectPosition: "bottom", width: "100%" },
    title: "Backend developer",
  },
  {
    testimony: "I have always dreamed of making cool project",
    picture: Abraham,
    name: "Abraham",
    title: "Backend developer",
  },

  {
    testimony: "I have always dreamed of making cool project",
    picture: Davies,
    name: "Davies",
    title: "Backend developer",
  },
  {
    testimony: "I have always dreamed of making cool project",
    picture: Busola,
    style: { height: "100%" },
    name: "Busola",
    title: "Backend developer",
  },
  {
    testimony:
      "ATS has changed my life by enabling me to make a great living from behind my computer. if you are a software engineer looking to work remotely, I higly recommend that you check out ATS",
    picture: Blessing,
    style: { width: "100%" },
    name: "Davies",
    title: "Backend developer",
  },
];

type Props = {
  selected: number;
};

// const [listRef] = autoAnimate();

function Testimonial({ selected }: Props) {
  const [parent] = useAutoAnimate<HTMLDivElement>();
  const [testimonial, setTestimonial] = useState(testimony);

  return (
    <div className="grid items-center gap-6">
      <h2 className="text-center min-h-[2rem]">
        {testimonial[2]["testimony"]}
      </h2>
      <article className="flex justify-between gap-8">
        <button
          onClick={() => {
            const juggle = [...testimonial];
            juggle.unshift(juggle.pop() as Testimony[number]);
            setTestimonial(juggle);
          }}
        >
          <ArrowLeft2 size={32} />
        </button>
        <section
          className="grid items-center w-8/12 gap-6"
          style={{ gridTemplateColumns: "repeat(2, 1fr) 3fr repeat(2, 1fr)" }}
          ref={parent}
        >
          {testimonial.map(({ picture }, idx) => (
            <figure key={idx} className="min-h-[20rem] grid items-center">
              <div
                className={clsx(
                  "items-center gap-6 grid shadow-2xl rounded-full aspect-square border-white overflow-hidden border-4"
                )}
              >
                <img
                  src={picture.src}
                  className="object-cover w-full h-auto"
                  alt=""
                />
              </div>
            </figure>
          ))}
        </section>
        <button
          onClick={() => {
            const juggle = [...testimonial];
            juggle.push(juggle.shift() as Testimony[number]);
            setTestimonial(juggle);
          }}
        >
          <ArrowRight2 size={32} />
        </button>
      </article>
      <div className="text-center">
        <p>{testimonial[2]["name"]}</p>
        <h2>{testimonial[2]["title"]}</h2>
      </div>
    </div>
  );
}

export default Testimonial;
