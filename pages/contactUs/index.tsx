import LoginBakground from "./assets/atslogin.png";
import React, { useEffect, useState } from "react";
import ReceivedMessage from "./assets/receivedmess.png";
import axios from "axios";
import { useForm } from "@mantine/form";
import { Button, Textarea, TextInput } from "@mantine/core";
import CryptoJS from "crypto-js";
import { Icon } from "@iconify/react";


var key = CryptoJS.enc.Utf8.parse("bQeThWmZq4t7w9z$C&F)J@NcRfUjXn2r");
var iv = CryptoJS.enc.Utf8.parse("s6v9y$B&E)H@McQf");

const encrypt = (element: any) => {
  return CryptoJS.AES.encrypt(element, key, {
    iv: iv,
  }).toString();
};
interface FormValues {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

function ContactUs() {
  const form = useForm<FormValues>({
    initialValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const [success, setSuccess] = useState(false);

  const sendMessage = (values: FormValues) => {
    var data = {
      fullName: encrypt(values.fullName),
      email: encrypt(values.email),
      subject: encrypt(values.subject),
      message: encrypt(values.message),
    };
    axios({
      method: "post",
      url: "https://atsbk.afexats.com/api/v1/support/contact-us-list-create/",
      headers: {
        "api-key": process.env.NEXT_PUBLIC_API_KEY,
        "hash-key": process.env.NEXT_PUBLIC_HASH_KEY,
        "request-ts": "1669397556",
        "Content-Type": "application/json",
      },
      data: data,
    })
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          setSuccess(true);
          form.reset();
          setTimeout(() => {
            setSuccess(false);
          }, 5000);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div
      style={{
        backgroundImage: `url(${LoginBakground.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        paddingBlock: "80px",
      }}
    >
      <section className="text-center text-[clamp(1.2rem,3rem,3.5rem)] font-bold text-bold-jet leading-[3.5rem] pb-[3rem]">
        <span className="bg-light-internationalOrange w-fit text-white p-2">
          Contact
        </span>{" "}
        Us
      </section>
      <section className="flex flex-col gap-6 lg:grid lg:grid-cols-[2fr_1fr] w-[85%] lg:gap-4 max-w-screen-2xl mx-auto">
        <article
          className="flex bg-white rounded-md flex-col px-6 py-8"
          style={{ boxShadow: "0px 4px 12px 1px rgba(0, 0, 0, 0.25)" }}
        >
          <form
            className="flex flex-col gap-2"
            onSubmit={form.onSubmit(sendMessage)}
          >
            {success ? (
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
            <div className="flex flex-col md:flex md:flex-row md:gap-2 md:items-center md:justify-center">
              <TextInput
                styles={{
                  input: { backgroundColor: "#FBFAF9" },
                  root: { flex: "1", marginTop: "0px" },
                  justifySelf: "center",
                  alignSelf: "center",
                }}
                type="text"
                required
                placeholder="Full name"
                {...form.getInputProps("fullName")}
              />
              <TextInput
                classNames={{ root: "md:mt-0 md:flex-1 w-full" }}
                styles={{
                  input: { backgroundColor: "#FBFAF9" },
                  root: {
                    marginTop: "0px",
                    justifySelf: "center",
                    alignSelf: "center",
                  },
                }}
                type="email"
                required
                placeholder="Email"
                mt="md"
                {...form.getInputProps("email")}
              />
            </div>
            <TextInput
              styles={{ input: { backgroundColor: "#FBFAF9" } }}
              type="text"
              placeholder="Subject"
              required
              mt="md"
              {...form.getInputProps("subject")}
            />
            <Textarea
              styles={{ input: { backgroundColor: "#FBFAF9" } }}
              error="All fields are required"
              placeholder="Message"
              className="font-['Mulish']"
              minRows={8}
              mt="md"
              required
              size="xl"
              {...form.getInputProps("message")}
            />
            <Button 
              className="bg-[#C81107] self-end hover:bg-[#C81107] font-['Mulish'] rounded-xl text-white py-3 px-6"
              type="submit"
              mt="md"
            >
              Submit
            </Button>
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
            <h4 className="mb-3 font-bold leading-6 text-bold-eerieBlack">
              Follow on
            </h4>
            <ul className="flex gap-3">
              <li>
                <a
                  href="https://www.instagram.com/afexnigeria/"
                  target="_blank"
                >
                  <Icon
                    icon="line-md:instagram"
                    color="#b2beb5"
                    width="32"
                    height="32"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/afexnigeria" target="_blank">
                  <Icon
                    icon="jam:facebook-square"
                    color="#b2beb5"
                    width="32"
                    height="32"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/afex-commodities-exchange"
                  target="_blank"
                >
                  <Icon
                    icon="jam:linkedin-square"
                    color="#b2beb5"
                    width="32"
                    height="32"
                  />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/AFEXNigeria" target="_blank">
                  <Icon
                    icon="jam:twitter-square"
                    color="#b2beb5"
                    width="32"
                    height="32"
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
