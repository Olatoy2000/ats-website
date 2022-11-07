import React from "react";
import GuyWithLaptop from "./assets/new-man-with-laptop.jpg";
import PopUp from "../assets/group-pop.png";
import Demo from "../../components/menuPopover";
import Background from "./assets/background.png";
import Container from "../../components/Container";

function LandingPage() {
  return (
    <Container
      className="pt-[6.25rem] mt-8 relative flex justify-between gap-1 bg-no-repeat bg-cover items-center"
      style={{ backgroundImage: `url(${Background.src})` }}
    >
      <article className="flex flex-col w-[30.625rem] pl-8 gap-3">
        <div className="pt-6 text-[#313131] leading-[100px] tracking-[-1.5px] text-[75px] font-black ">
          Begin Your Tech Journey
        </div>
        <div className="text-[1.25rem] text-[#313131] pb-8">
          Kickstart your tech career with our AFEX Tech Star program
        </div>
        <button className="join-button rounded-xl w-[7.5rem] text-white p-3 mt-8 leading-6 text-center hover:bg-[#312541]">
          Join Today
        </button>
      </article>
      <img src={GuyWithLaptop.src} alt="Man with Laptop" className="pt-3 " />
    </Container>
  );
}

export default LandingPage;
