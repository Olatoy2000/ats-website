import Abraham from "./assets/abraham.png";
import Samuel from "./assets/samuel.png";
import Blessing from "./assets/blessing.png";
import Davies from "./assets/davies.png";
import Busola from "./assets/busola.png";
import { CSSProperties, useState } from "react";
import { StaticImageData } from "next/image";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { clsx } from "@mantine/core";

type Testimony = Array<{
  testimony: string;
  style?: CSSProperties;
  picture: StaticImageData;
  name: string;
  title: string;
  id: number;
}>;

const testimony: Testimony = [
  {
    id: 1,
    testimony:
      "I have always dreamed of making cool, new projects while working as a startup. ATS makes this dream a reality and I would highly recommend this to young developers out there.",
    picture: Samuel,
    name: "Samuel",
    style: { objectPosition: "bottom", width: "100%" },
    title: "Backend developer",
  },
  {
    id: 2,
    testimony: "I have always dreamed of making cool project",
    picture: Abraham,
    name: "Abraham",
    title: "Backend developer",
  },

  {
    id: 3,
    testimony: "I have always dreamed of making cool project",
    picture: Davies,
    name: "Davies",
    title: "Backend developer",
  },
  {
    id: 4,
    testimony: "I have always dreamed of making cool project",
    picture: Busola,
    style: { height: "100%" },
    name: "Busola",
    title: "Backend developer",
  },
  {
    id: 5,
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              stroke="#FF8A65"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="1.5"
              d="M9.57 5.93L3.5 12l6.07 6.07M20.5 12H3.67"
            ></path>
          </svg>
        </button>
        <section
          className="grid items-center w-8/12 gap-6"
          style={{ gridTemplateColumns: "repeat(2, 1fr) 3fr repeat(2, 1fr)" }}
          ref={parent}
        >
          {testimonial.map(({ picture, id }, idx) => (
            <figure className="min-h-[20rem] grid items-center">
              <div
                key={id}
                className={clsx(
                  "items-center gap-6 grid rounded-full aspect-square border-white overflow-hidden border-4"
                )}
              >
                <img
                  key={idx}
                  src={picture.src}
                  className="w-full h-auto object-cover"
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              stroke="#FF8A65"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="1.5"
              d="M14.43 5.93L20.5 12l-6.07 6.07M3.5 12h16.83"
            ></path>
          </svg>
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
