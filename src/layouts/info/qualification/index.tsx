import React from "react";
import Container from "../../../components/Container";
import LadyInTech from "./assets/lady-in-tech.png";

export default function Qualification() {
  return (
    <Container className="flex items-center justify-between gap-14 my-[60px]">
      <div className="flex flex-col w-[43.75rem] text-[#343434] gap-4">
        <h2 className="font-bold leading-[3rem] text-[3rem]">
          Who is Qualified?
        </h2>
        <p className="font-normal text-[2rem] leading-[3.125rem]">
          This paid internship is open to Corps members, fresh Graduates and
          Industrial Training students.
        </p>
        <button
          style={{
            backgroundImage: "linear-gradient(168.79deg, #E1261C 28.64%, #8A0B04 136.7%)",
          }}
          className="self-start p-4 rounded-lg font-bold text-white leading-6"
        >
          Register Now
        </button>
      </div>
      <img src={LadyInTech.src} alt="lady in tech" className="w-[300px]" />
    </Container>
  );
}
