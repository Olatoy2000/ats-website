import LoginBakground from "./assets/atslogin.png";
import React, { useState } from "react";
import InstagramHandle from "./assets/ig.png";
import FacebookHandle from "./assets/fb.png";
import LinkedinHandle from "./assets/linkedinpage.png";
import TwitterHandle from "./assets/tweethandle.png";
import ReceivedMessage from "./assets/receivedmess.png";

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
      <section className="flex flex-col gap-6 lg:grid lg:grid-cols-[2fr_1fr] w-[85%] lg:gap-4 max-w-screen-2xl mx-auto">
        <article
          className="flex bg-white rounded-md flex-col px-6 py-8"
          style={{ boxShadow: "0px 4px 12px 1px rgba(0, 0, 0, 0.25)" }}
        >
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
            <div className="flex flex-col md:flex-row gap-6 md:gap-2">
              <input
                onChange={handleFullNameInputChange}
                value={values.fullName}
                type="text"
                placeholder="Full Name"
                className="w-full p-2 border outline-none text-black 
				"
                style={{
                  backgroundColor: "#FBFAF9",
                  borderRadius: "5px",
                }}
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
                style={{
                  backgroundColor: "#FBFAF9",
                  borderRadius: "5px",
                }}
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
              className="w-full p-2 border outline-none text-black"
              style={{
                backgroundColor: "#FBFAF9",
                borderRadius: "5px",
              }}
            />
            {submitted && !values.subject ? (
              <span
                className="text-light-internationalOrange"
                style={{
                  backgroundColor: "#FBFAF9",
                  borderRadius: "5px",
                }}
              >
                This field is required
              </span>
            ) : null}
            <textarea
              style={{
                resize: "none",
                backgroundColor: "#FBFAF9",
                borderRadius: "5px",
              }}
              name=""
              placeholder="Message"
              id=""
              onChange={handleMessageInputChange}
              value={values.message}
              className="p-1 border outline-none text-black"
              cols={30}
              rows={6}
            ></textarea>
            {submitted && !values.message ? (
              <span className="text-light-internationalOrange">
               All fields are required
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
        <article className="flex flex-col gap-8 md:flex md:flex-row md:items-baseline lg:flex-col lg:self-center md:gap-8 lg:p-4">
          <div className="flex flex-col pt-8 gap-2">
            <h4 className="font-bold leading-6 text-bold-eerieBlack">
              Address
            </h4>
            <p className="text-light-gray font-normal leading-6">
              AFEX Tech Hub. Christiana Oyinade House, Beside First Bank, Iwo
              Road, Ibadan.
            </p>
          </div>
          <div className="flex flex-col gap-2 leading-6 text-bold-eerieBlack">
            <h4 className="font-bold leading-6 text-bold-eerieBlack">
              Contact Us
            </h4>
            <p className="text-light-gray font-normal leading-6">
              <a href="tel:+234(0)9030031333">+234 (0) 903 003 1333</a>
            </p>
            <p className="text-light-gray font-normal leading-6">
              <a href="mailto:afexnigeria.com">contact us@afexnigeria.com</a>
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
