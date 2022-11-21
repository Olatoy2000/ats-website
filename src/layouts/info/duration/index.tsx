import React from "react";
import Container from "../../../components/Container";
import Clock from "./assets/Clock.png";

export default function Duration() {
  return (
    <Container>
      <section className="hidden sm:flex sm:items-center sm:justify-between sm:gap-12 my-[12.5rem]">
        <div className="flex flex-col gap-10 text-[#343434]">
          <h2 className="font-bold text-bold-darkCharcoal sm:leading-[3rem] text-[clamp(1.2rem,3vw,3rem)]">
            Duration
          </h2>
          <p className="font-normal text-[clamp(0.875rem,2vw,2rem)] md:leading-7 lg:leading-[3rem]">
            ATS is a 6 - 12 months onsite internship program that exposes
            participants with tech backgrounds to top-notch practical
            experience. It focuses on fostering competency and professionalism
            in the tech space
          </p>
        </div>
        <img
          src={Clock.src}
          alt="clock under duration"
          className="lg:w-[11rem] self-start md:self-center md:w-[8.3125rem] w-[5.625rem]"
        />
      </section>
      <section className="flex flex-col md:hidden">
        <img src={Clock.src} alt="clock at mobile view" className="w-20 self-end" />
        <div>
          <h2 className="font-bold text-bold-darkCharcoal self-center text-[2rem] leading-10">
            Duration
          </h2>
          <p className="font-normal text-[0.875rem] leading-6">
            ATS is a 6 - 12 months onsite internship program that exposes
            participants with tech backgrounds to top-notch practical experience.
            It focuses on fostering competency and professionalism in the tech
            space
          </p>
        </div>
      </section>
    </Container>
  );
}
