import { Message2, Eye, Like1 } from "iconsax-react";
import Container from "../../components/Container";
import Link from "next/link";
import NewsBackgroundTemplate from "./assets/newback.png";
import { TagRight } from "iconsax-react";

export default function NewsBackground() {
  return (
    <Container>
      <section className="flex flex-col gap-8 mb-10">
        <Link href="/updates" className="self-end">
          <button className="bg-[#C81107] flex gap-4 justify-between p-2 focus-within:bg-black leading-6 text-white font-bold rounded-md items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="#FFF"
            >
              <path
                stroke="#C81107"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM15.5 12h-6"
              ></path>
              <path
                stroke="#C81107"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M11.5 9l-3 3 3 3"
              ></path>
            </svg>
            Back to Updates
          </button>
        </Link>
        <article
          className="flex z-[-1] justify-center items-center pt-28 flex-col gap-8"
          style={{
            background: `url(${NewsBackgroundTemplate.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "relative",
          }}
        >
          <div className="absolute left-0 right-0 bottom-0 top-0 bg-[#020000] opacity-40"></div>
          <p className=" text-light-antiFlashWhite leading-[4rem] z-20 text-center font-bold text-[clamp(1.5rem,3.5vw,4rem)]">
            AFEX Celebrates World Investor Week 2022 with the Securities and
            Exchange Commission of Nigeria
          </p>
          <div className="flex gap-4">
            <TagRight color="#D9D9D9" variant="Bulk" size={32} />
          </div>
        </article>
      </section>
    </Container>
  );
}
