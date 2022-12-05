import { useAutoAnimate } from "@formkit/auto-animate/react";
import { clsx } from "@mantine/core";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import test from "node:test";

const testimonialFrontpageListSample = {
  status: "success",
  status_code: "200",
  data: [
    {
      id: 3,
      tech_star_full_name: "Pastor Tunde",
      testimonial: "ATS was worth a fortune to my company. I'm good to go.",
      tech_star_profile_picture: "/media/tech_star_picture/MicrosoftTeams-image_2.png",
      tech_star_cohort: "1.0",
      tech_star_course: "Frontend Development"
    },
  ],
  "message": "Successfully"
}

type TestimonialFrontpageList = typeof testimonialFrontpageListSample;
type Testimony = TestimonialFrontpageList["data"][number]

// const [listRef] = autoAnimate();

function Testimonial() {
  const [parent] = useAutoAnimate<HTMLDivElement>();
  // const [testimonial, setTestimonial] = useState(null)

  // useEffect(() => {
  //     axios("/api/v1/tech-stars/testimonial-frontpage-list")
  //       .then(({ data }) => setTestimonial(data))
  //       .catch((e) => e)
  // }, [])

  const { data: testimonialList, isLoading } = useQuery<TestimonialFrontpageList>(
    ["testimonial", "frontpage"],
    async () =>
      // axios("/api/v1/tech-stars/testimonial-frontpage-list", {
        axios({
        method: "get",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/tech-stars/testimonial-frontpage-list`,
        headers: {
          "api-key": `${process.env.NEXT_PUBLIC_APP_API_KEY}`,
          // "hash-key": "091fdc6ac81fde9d5bccc8aa0e52f504a2a5a71ad51624b094c26f6e51502b5a",
          "request-ts": "1669397556",
          "hash-key": `${process.env.NEXT_PUBLIC_HASH_KEY}`
        }

      })
        .then(({ data }) => data)
        .catch((e) => e)
  );
  
  const [testimonial, setTestimonial] = useState<Testimony[]>([])
  
 useEffect(() => {
   setTestimonial(testimonialList?.data?? [])
 }, [testimonialList])

  return (
    <div className="grid items-center lg:gap-6 md:gap-4 gap-2">
      <h2 className="text-center min-h-[2rem]">
        {testimonial?.[2]?.["testimonial"]}
      </h2>
      <article className="flex justify-between gap-8">
        <button
          onClick={() => {
            if (testimonial) {
              const juggle = [...testimonial];
              juggle.unshift(juggle.pop() as Testimony);
              setTestimonial(juggle);
            }
          }}
        >
          <ArrowLeft2 size={32} />
        </button>
        <section
          className="grid items-center w-8/12 gap-6"
          style={{ gridTemplateColumns: "repeat(2, 1fr) 3fr repeat(2, 1fr)" }}
          ref={parent}
        >
          {testimonial?.map(({ tech_star_profile_picture }, idx) => (
            <figure key={idx} className="xl:min-h-[20rem] grid items-center">
              <div
                className={clsx(
                  "items-center gap-6 grid shadow-2xl rounded-full aspect-square border-white overflow-hidden border-4"
                )}
              >
                <img
                  src={process.env.NEXT_PUBLIC_BASE_URL + tech_star_profile_picture}
                  className="object-cover w-full h-auto"
                  alt=""
                />
              </div>
            </figure>
          ))}
        </section>
        <button
          onClick={() => {
            if (testimonial) {
              const juggle = [...testimonial];
              juggle.push(juggle.shift() as Testimony);
              setTestimonial(juggle);
            }
          }}>
          <ArrowRight2 size={32} />
        </button>
      </article>
      <div className="text-center">
        <p className="text-[clamp(0.625rem,1vw,1rem)]">{testimonial?.[2]?.["tech_star_full_name"]}</p>
        <h2 className="text-[clamp(0.625rem,1vw,1rem)]">{testimonial?.[2]?.["tech_star_course"]}</h2>
        <h2 className="mb-12 text-[clamp(0.625rem,1vw,1rem)]">{testimonial?.[2]?.["tech_star_cohort"]}</h2>
      </div>
    </div>
  );
}

export default Testimonial;
