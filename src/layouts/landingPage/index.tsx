import React from "react";
import GuyWithLaptop from "./assets/new-man-with-laptop.jpg";
import Background from "./assets/background.png";
import Container from "../../components/Container";
import Link from "next/link";
import { useRouter } from "next/router";

function LandingPage() {
  const router = useRouter();
  return (
    <Container>
      <section
<<<<<<< HEAD
        className="pt-[6.25rem] mt-8 xl:flex xl:justify-between xl:gap-1 bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${Background.src})` }}
      >
        <article className="flex flex-col mx-auto md:w-[30.625rem] pt-14 xl:justify-start gap-3">
          <div className="pt-6 text-[#313131] leading-[100px] tracking-[-1.5px] text-[clamp(1.5rem,4vw,4.68rem)] font-bold">
=======
        className="pt-[6.25rem] mt-8 relative flex justify-between gap-1 bg-no-repeat bg-cover items-center"
        style={{ backgroundImage: `url(${Background.src})` }}
      >
        <article className="flex flex-col w-[30.625rem] pl-8 gap-3">
          <div className="pt-6 text-[#313131] leading-[100px] tracking-[-1.5px] text-[75px] font-black ">
>>>>>>> Odebunmi
            Begin Your Tech Journey
          </div>
          <div
            className="text-[1.25rem] text-[#313131] pb-8"
          >
            Kickstart your tech career with our AFEX Tech Star program
          </div>
          <Link href="/courses">
<<<<<<< HEAD
            <button className="join-button rounded-xl  text-white p-6 mt-8 leading-6 text-center hover:bg-[#312541]">
=======
            <button className="join-button rounded-xl w-[7.5rem] text-white p-3 mt-8 leading-6 text-center hover:bg-[#312541]">
>>>>>>> Odebunmi
              Join Today
            </button>
          </Link>
        </article>
<<<<<<< HEAD
        <img src={GuyWithLaptop.src} alt="Man with Laptop" className="w-40 md:w-max" />
=======
        <img src={GuyWithLaptop.src} alt="Man with Laptop" className="pt-3 " />
>>>>>>> Odebunmi
      </section>
    </Container>
  );
}

export default LandingPage;
