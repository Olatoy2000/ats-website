import React from "react";
import Container from "../../../components/Container";
import Clock from "./assets/Clock.png";

export default function Duration() {
  return (
    <Container className="flex items-center justify-between gap-20 my-[200px]">
      <div className="flex flex-col  text-[#343434] gap-4">
        <h2 className="font-bold leading-[3rem] text-[3rem]">Duration</h2>
        <p className="font-normal text-[2rem] leading-[3.125rem]">
          ATS is a 6 - 12 months onsite internship program that exposes
          participants with tech backgrounds to top-notch practical experience.
          It focuses on fostering competency and professionalism in the tech
          space
        </p>
      </div>
      <img src={Clock.src} alt="clock under duration" className="w-[12.5rem]" />
    </Container>
  );
}
