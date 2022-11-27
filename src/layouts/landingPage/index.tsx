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
        className="pt-[6.25rem] mt-8 xl:flex xl:justify-between md:flex md:justify-between xl:gap-1 bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${Background.src})` }}
      >
        <article className="flex flex-col md:mx-auto md:w-[30.625rem] pt-14 w-60 justify-start gap-3">
          <div className="pt-6 text-[#313131] leading-[3.125rem] md:leading-[4.625rem] md:text-[3.875rem] lg:leading-[6.25rem] lg:text-[4.125rem] tracking-[-1.5px] font-black">
            Begin Your Tech Journey
          </div>
          <div className="text-[clamp(0.875rem,1.125vw,1.125rem)] font-bold text-[#313131] pb-8">
            Kickstart your tech career with our AFEX Tech Star program
          </div>
          <Link href="/courses">
            <button className="join-button rounded-xl text-white p-4 md:mt-8 leading-6 text-center hover:bg-[#312541]">
              Join Today
            </button>
          </Link>
        </article>
        <img
          src={GuyWithLaptop.src}
          alt="Man with Laptop"
          className="xl:w-max lg:w-80 md:w-60 mt-12"
        />
      </section>
    </Container>
  );
}

export default LandingPage;
