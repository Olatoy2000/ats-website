import React from "react";
import Container from "../../../components/Container";
import ThreeFriends from "./assets/three-friends.png";

export default function TeamWork() {
  return (
    <Container
      width="w-5/6"
      className="flex items-center justify-between gap-20 p-10 pt-10"
      margin="ml-auto my-16"
    >
      <img src={ThreeFriends.src} alt="three youth friends" className="w-[25rem]" />
      <div className=" flex flex-col w-[500px] text-[#343434] gap-4">
        <h2 className="font-bold leading-[3rem] text-[3rem]">Teamwork</h2>
        <p className="font-normal text-[2rem] leading-[3.125rem]">
          Young and creative minds coming together to learn and work as a team,
          to achieve the same goal.{" "}
        </p>
      </div>
    </Container>
  );
}
