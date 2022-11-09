import { Message2, Eye, Like1 } from "iconsax-react";
import Container from "../../components/Container";
import Link from "next/link";
import XpertBack from "./assets/xpertback.png";

export default function Xpertbackestablished() {
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
            background: `url(${XpertBack.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "relative",
          }}
        >
          <div className="absolute left-0 right-0 bottom-0 top-0 bg-[#020000] opacity-40"></div>
          <p className=" text-light-antiFlashWhite z-20 leading-4  font-bold text-[clamp(1.5rem,4vw,3.5rem)] pb-32">
            Ba Wasa! Long Established
          </p>
          <section className="flex gap-5 pb-10 items-center justify-center">
            <div className="flex gap-2 items-center z-20">
              <Like1 size={30} color="#FFF" />
              <p className="text-white number font-semibold text-[1.5rem] leading-7">
                10
              </p>
            </div>
            <div className="flex gap-2 items-center z-20">
              <Message2 color="#fff" variant="Bold" size={30} />
              <p className="text-white number font-semibold text-[1.5rem] leading-7">
                10
              </p>
            </div>
            <div className="flex gap-2 items-center z-20">
              <Eye size={30} color="#FFF" />
              <p className="text-white number font-semibold text-[1.5rem] leading-7">
                5
              </p>
            </div>
          </section>
        </article>
      </section>
    </Container>
  );
}
