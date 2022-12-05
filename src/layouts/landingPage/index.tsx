import React from "react";
import GuyWithLaptop from "./assets/new-man-with-laptop.jpg";
import Background from "./assets/background.png";
import Container from "../../components/Container";
import Link from "next/link";
import MrMustapha from "./assets/mustapha.png"
import { useRouter } from "next/router";
import MustaphaProduct from "./assets/mustproduct.png"

function LandingPage() {
  const router = useRouter();
  return (
    <section className="w-full bg-no-repeat bg-cover" style={{ backgroundImage: `url(${Background.src})` }}>
      <Container>
        <section
          className="md:pt-[6.25rem] md:mt-8 xl:flex xl:justify-between md:flex md:justify-between xl:gap-1">
          <article className="flex flex-col md:pl-10 md:w-[30.625rem] pt-14 w-60 justify-start gap-3">
            <div className="pt-6 text-[#313131] leading-[3.125rem] md:leading-[4.625rem] md:text-[3.875rem] text-[3rem] lg:leading-[6.25rem] lg:text-[4.125rem] tracking-[-1.5px] font-black">
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
            src={MustaphaProduct.src}
            alt="Man with Laptop"
            className="xl:w-[600px] sm:w-[500px] w-[280px] self-center justify-self-center md:w-[400px] mt-12"
          />
        </section>
      </Container>

    </section>
  );
}

export default LandingPage;
