import LoginBakground from "./assets/atslogin.png";
import React, { useState } from "react";
import WrongLoginMessage from "./assets/wrong-login.png";
import InstagramHandle from "./assets/ig.png";
import FacebookHandle from "./assets/fb.png";
import LinkedinHandle from "./assets/linkedinpage.png";
import TwitterHandle from "./assets/tweethandle.png"



function ContactUs() {
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
    <div
      style={{
        backgroundImage: `url(${LoginBakground.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        paddingBlock: "80px",
      }}
    >
      <section className="text-center text-[clamp(1.5rem,3rem,3.5rem)] font-bold text-bold-jet leading-[3.5rem] pb-[3rem]">
        <span className="bg-light-internationalOrange text-white p-2">
          Contact
        </span>{" "}
        Us
      </section>
      <section className="grid grid-cols-[2fr_1fr] w-[85%] gap-4 max-w-screen-2xl mx-auto">
        <article
          className="flex bg-white rounded-md flex-col px-6 py-8"
          style={{ boxShadow: "0px 4px 12px 1px rgba(0, 0, 0, 0.25)" }}
        >
          <form onSubmit={handleSubmit} className="flex flex-col w-full gap-6">
            {submitted && valid ? (
              <div
                className="leading-6 text-[1rem] rounded-md flex p-3 items-center justify-start gap-3"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(250, 240, 234, 0.78) 0%, rgba(252, 239, 234, 0.99) 19.26%)",
                  border: "1.8px solid #DE6D69",
                  boxShadow:
                    "inset 0px 0px 3.66893px rgba(255, 255, 255, 0.63)",
                }}
              >
                <img src={WrongLoginMessage.src} alt="" className="w-5" />
                <h5>Thanks, your message was received</h5>
              </div>
            ) : null}
            <div className="flex gap-2">
              <input
                onChange={handleFullNameInputChange}
                value={values.fullName}
                type="text"
                placeholder="Full Name"
                className="w-full p-2 border outline-none text-[#C81107] inline-block"
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
                className="w-full p-2 border outline-none text-[#C81107]"
              />
              {submitted && !values.email ? (
                <span className="text-light-internationalOrange">
                  Please enter your email
                </span>
              ) : null}
            </div>
            <input
              onChange={handleSubjectInputChange}
              value={values.subject}
              type="text"
              placeholder="Subject"
              className="w-full p-2 border outline-none text-[#C81107]"
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
              className="p-1 border outline-none text-[#C81107]"
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
              className="bg-[#C81107] self-start rounded-xl text-white py-3 px-6"
            >
              Submit
            </button>
          </form>
        </article>
        <article className="flex flex-col gap-4 p-4">
          <div className="flex flex-col pt-8 gap-2">
            <h4 className="font-bold leading-6 text-bold-eerieBlack">
              Address
            </h4>
            <p className="text-light-gray font-normal leading-6">
              AFEX Tech Hub. Christiana Oyinade House, Beside First Bank, Iwo
              Road, Ibadan.
            </p>
          </div>
          <div className="font-bold leading-6 text-bold-eerieBlack">
            <h4 className="font-bold leading-6 text-bold-eerieBlack">
              Contact Us
            </h4>
            <p className="text-light-gray font-normal leading-6">
              +234 (0) 903 003 1333
            </p>
            <p className="text-light-gray font-normal leading-6">
              contact us@afexnigeria.com
            </p>
          </div>
          <div className="font-bold leading-6 text-bold-eerieBlack">
            <h4 className="font-bold leading-6 text-bold-eerieBlack">
              Follow on
            </h4>
            <ul className="flex gap-3">
              <li>
                <a
                  href="https://www.instagram.com/afexnigeria/"
                  target="_blank"
                >
                  <img
                    src={InstagramHandle.src}
                    alt="Afex Instagram handle"
                    className="w-6"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/afexnigeria" target="_blank">
                  <img
                    src={FacebookHandle.src}
                    alt="Afex facebook handle"
                    className="w-6"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/afex-commodities-exchange"
                  target="_blank"
                >
                  <img
                    src={LinkedinHandle.src}
                    alt="Afex linkedin handle"
                    className="w-6"
                  />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/AFEXNigeria" target="_blank">
                  <img
                    src={TwitterHandle.src}
                    alt="Afex Twitter handle"
                    className="w-6"
                  />
                </a>
              </li>
            </ul>
          </div>
        </article>
      </section>
    </div>
  );
}

export default ContactUs;
