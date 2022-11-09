import { Menu } from "@mantine/core";
import React from "react";
import PopUp from "./assets/group-pop.png";
import BoyLaptop from "./assets/boy-with-nosemark.png";
import RedOverlay from "./assets/red-overlay.png";

export default function MenuPopover() {
  return (
    <Menu transition="slide-up" offset={10} transitionDuration={150}>
      <Menu.Target>
        <img
          src={PopUp.src}
          className="fixed w-10 bottom-6 right-6 z-[400]"
          alt="pop-up"
        />
      </Menu.Target>
      <Menu.Dropdown className="border-2 boder-2-[#EAAEAD] rounded-2xl !left-auto right-5 !top-auto bottom-5 !fixed">
        <Menu.Label
          className={`w-[400px] bg-no-repeat bg-cover border border-[#EAAEAD] rounded-tl-2xl rounded-tr-2xl flex gap-3 justify-start pl-8 py-4`}
          style={{
            backgroundImage: `url(${RedOverlay.src})`,
          }}
        >
          <div className="p-2 rounded-full bg-[#EAAEAD]">
            <img src={BoyLaptop.src} alt="Boy with Laptop" className="w-5" />
          </div>
          <section className="flex flex-col gap-3">
            <div className="text-[1.125rem] text-bold text-white leading-3">
              Ask_Deji
            </div>
            <div className="text-white text-[0.875rem] font-normal leading-3">
              Customer Representative
            </div>
          </section>
        </Menu.Label>
        <Menu.Label className="w-[400px] flex flex-col gap-4">
          <p className="text-[#C81107] text-[0.75rem] font-normal leading-4">
            Please fill out the form below and we will get back to you as soon
            as possible.
          </p>
          <form className="flex flex-col w-full gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-2 border outline-none text-[#C81107]"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-2 border outline-none text-[#C81107]"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-2 border outline-none text-[#C81107]"
              required
            />
            <textarea
              style={{ resize: "none" }}
              name=""
              placeholder="Message"
              id=""
              className="p-1 border outline-none text-[#C81107]"
              cols={30}
              rows={6}
              required
            ></textarea>
            <button
              type="submit"
              className="bg-[#C81107] rounded-xl text-white p-3"
            >
              Submit
            </button>
          </form>
        </Menu.Label>
      </Menu.Dropdown>
    </Menu>
  );
}
