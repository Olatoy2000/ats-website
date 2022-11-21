import React, { useEffect } from "react";
import Container from "../../../components/Container";
import LadyInTech from "./assets/lady-in-tech.png";
import WhiteFemaleBack from "./assets/third-bg.png";
import Link from "next/link";
import LadyInTechPhone from "./assets/ladyfriendphone.png";

export default function Qualification() {
  return (
    <Container>
      <section
        className="hidden md:flex md:items-center md:justify-between md:gap-14 md:my-[60px] md:bg-right-top"
        style={{
          backgroundImage: `url(${WhiteFemaleBack.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "25%",
        }}
      >
        <div className="flex flex-col w-[43.75rem] text-[#343434] gap-4">
          <h2 className="font-bold leading-[3rem] text-[clamp(1.2rem,3vw,3rem)]">
            Who is Qualified?
          </h2>
          <p className="font-normal text-[clamp(0.875rem,2vw,2rem)] leading-[3.125rem]">
            This paid internship is open to Corps members, fresh Graduates and
            Industrial Training students.
          </p>
          <Link href="/courses">
            <button className="join-button self-start p-4 rounded-lg font-bold text-white hover:bg-[#312541] leading-6">
              Register Now
            </button>
          </Link>
        </div>
        <img src={LadyInTech.src} alt="lady in tech" className="w-[300px]" />
      </section>
      <section className="md:hidden flex flex-col gap-4">
        <img src={LadyInTechPhone.src} alt="" className="w-28 self-end" />
        <div>
          <h2 className="font-bold leading-10 text-bold-darkCharcoal text-[2rem]">
            Who Is Qualified?
          </h2>
          <p className="leading-6 font-normal text-start text-[0.875rem] text-bold-darkCharcoal">
            {" "}
            This paid internship is open to Corps members, fresh Graduates and
            Industrial Training students.
          </p>
        </div>
      </section>
    </Container>
  );
}
