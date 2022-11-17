import { Menu } from "@mantine/core";
import React, { useState } from "react";
import PopUp from "./assets/group-pop.png";
import BoyLaptop from "./assets/boy-with-nosemark.png";
import RedOverlay from "./assets/red-overlay.png";
import ReceivedMessage from "./assets/receivedmess.png";

export default function MenuPopover() {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (values.fullName && values.email && values.subject && values.message) {
      setValid(true);
    }
    setSubmitted(true);
  };

  const handleFullNameInputChange = (event: { target: { value: any } }) => {
    setValues({ ...values, fullName: event.target.value });
  };

  const handleEmailInputChange = (event: { target: { value: any } }) => {
    setValues({ ...values, email: event.target.value });
  };

  const handleSubjectInputChange = (event: { target: { value: any } }) => {
    setValues({ ...values, subject: event.target.value });
  };

  const handleMessageInputChange = (event: { target: { value: any } }) => {
    setValues({ ...values, message: event.target.value });
  };

  const [valid, setValid] = useState(false);

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
          <form onSubmit={handleSubmit} className="flex flex-col w-full gap-6">
            {submitted && valid ? (
              <div
                className="leading-6 text-[1rem] border-2 rounded-md flex p-3 items-center justify-start gap-3"
                style={{
                  background:
                    "linear-gradient(180deg, #EEFDF7 0%, #EBFDF5 19.26%);",
                  border: "1.83447px solid #76AD94",
                  boxShadow:
                    "inset 0px 0px 3.66893px rgba(255, 255, 255, 0.63)",
                }}
              >
                <img src={ReceivedMessage.src} alt="" className="w-5" />
                <h5>Thanks, your message was received</h5>
              </div>
            ) : null}
            <input
              onChange={handleFullNameInputChange}
              value={values.fullName}
              type="text"
              placeholder="Full Name"
              className="w-full p-2 border outline-none text-black"
            />
            {submitted && !values.fullName ? (
              <span className="text-light-internationalOrange">
                Please enter your full name
              </span>
            ) : null}
            <input
              onChange={handleEmailInputChange}
              value={values.email}
              type="email"
              placeholder="Email Address"
              className="w-full p-2 border outline-none text-black"
            />
            {submitted && !values.email ? (
              <span className="text-light-internationalOrange">
                Please enter your email
              </span>
            ) : null}
            <input
              onChange={handleSubjectInputChange}
              value={values.subject}
              type="text"
              placeholder="Subject"
              className="w-full p-2 border outline-none text-black"
            />
            {submitted && !values.subject ? (
              <span className="text-light-internationalOrange">
                Please enter a subject
              </span>
            ) : null}
            <textarea
              style={{ resize: "none" }}
              name=""
              placeholder="Message"
              id=""
              onChange={handleMessageInputChange}
              value={values.message}
              className="p-1 border  outline-none text-black"
              cols={30}
              rows={6}
            ></textarea>
            {submitted && !values.message ? (
              <span className="text-light-internationalOrange">
                Kindly leave a message
              </span>
            ) : null}
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
