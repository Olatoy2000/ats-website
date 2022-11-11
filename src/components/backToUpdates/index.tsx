import React from "react";
import Container from "../Container";
import GalleryHero from "./assets/gallery-hero.png";
import Link from "next/link";
export default function BackToUpdate() {
  return (
    <Container>
      <section className="flex my-10 flex-col group gap-8 bg-white">
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
        <img src={GalleryHero.src} alt="Gallery for Samuel" />
      </section>
    </Container>
  );
}
