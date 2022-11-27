import React from "react";
import Container from "../../../components/Container";
import ThreeFriends from "./assets/three-friends.png";
import FemaleTechBack from "./assets/second-down-bg.png";
import BackFriendPhone from "./assets/iPhone 13/recphone.png";
import ThreFriendPhone from "./assets/iPhone 13/threfriendphone.png";
import backgroundFriendsWithArrow from "./assets/back-three-arrow.png";
export default function TeamWork() {
  return (
    <Container>
      <section className="hidden md:flex md:justify-between md:gap-[8.25rem]">
        <img
          src={backgroundFriendsWithArrow.src}
          alt="three youth friends"
          className="md:w-[20rem] w-[6.25rem]"
        />
        <div className="flex flex-col md:text-[#343434] text-bold-darkCharcoal gap-4">
          <h2 className="font-bold leading-[3rem] text-[clamp(1.2rem,3vw,3rem)]">
            Teamwork
          </h2>
          <p className="font-normal text-[clamp(0.875rem,2vw,2rem)] md:leading-[3.125rem]">
            Young and creative minds coming together to learn and work as a
            team, to achieve the same goal.{" "}
          </p>
        </div>
      </section>
      <section className="md:hidden flex flex-col gap-4">
        <div>
          <img src={backgroundFriendsWithArrow.src} alt="" />
        </div>
        <div>
          <h2 className="text-bold-darkCharcoal text-end text-[2rem] leading-10 font-bold">
            Teamwork
          </h2>
          <p className="leading-6 font-normal text-start text-[0.875rem] text-bold-darkCharcoal">
            Young and creative minds coming together to learn and work as a
            team, to achieve the same goal.{" "}
          </p>
        </div>
      </section>
    </Container>
  );
}
