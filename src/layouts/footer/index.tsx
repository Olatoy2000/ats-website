import React from "react";
import FaceBook from "./assets/facebook.png";
import LinkedIn from "./assets/linkedin.png";
import Send from "./assets/send.png";
import Instagram from "./assets/instagram.png";
import Container from "../../components/Container";
import Twitter from "../footer/assets/twitter.png";
import Link from "next/link";

function Footer() {
  return (
    <section className="bg-black">
      <Container className="grid grid-cols-4 p-12 gap-12">
        <article className="flex flex-col gap-4">
          <h3 className="text-[#A09D9D;] leading-7 uppercase text-[1.25rem] font-bold">
            address
          </h3>
          <p className="font-normal leading-6 text-white">
            AFEX Tech Hub. Christiana Oyinade House, Beside First Bank, Iwo
            Road, Ibadan.
          </p>
          <p className="text-[0.8125rem] text-white font-normal leading-10 ats-address">
            &copy; 2022 AFEX NIGERIA
          </p>
        </article>
        <article className="flex flex-col gap-4">
          <h3 className="text-[#A09D9D;] leading-7 uppercase text-[1.25rem] font-bold">
            contact us
          </h3>
          <p className="font-normal leading-6 text-white">
            07000CALLAFEX (+234 70 002 255 2339) For Inquiries
            (contactus@afexnigeria.com) For Complaints and Resolution updates
            (support@afexnigeria.com)
          </p>
        </article>
        <article className="flex flex-col gap-4">
          <h3 className="text-[#A09D9D;] leading-7 uppercase text-[1.25rem] font-bold">
            quick links
          </h3>
          <div className="font-normal leading-6 text-white">
            <ul className="leading-6 font-bold text-[1rem]">
              <Link href="/login">
                <li className="pb-4">Login</li>
              </Link>
              <Link href="/courses">
                <li className="pb-4">Courses</li>
              </Link>
              <Link href="/login">
                <li className="pb-4">Terms & Conditions</li>
              </Link>
              <Link href="/login">
                <li className="pb-4">Privacy Policy</li>
              </Link>
            </ul>
          </div>
        </article>
        <article className="flex flex-col gap-4">
          <div className="flex gap-4">
            <ul className="flex gap-6 justify-between">
              <li>
                <a href="https://www.instagram.com/afexnigeria/">
                  <img
                    src={Instagram.src}
                    alt="Instagram Logo"
                    className="w-10"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/profile.php?id=100046536650064">
                  <img
                    src={FaceBook.src}
                    alt="Instagram Logo"
                    className="w-10"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/afex-commodities-exchange">
                  <img
                    src={LinkedIn.src}
                    alt="Instagram Logo"
                    className="w-10"
                  />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/AFEXNigeria">
                  <img
                    src={Twitter.src}
                    alt="Instagram Logo"
                    className="w-10"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="flex bg-[#383838] justify-between gap-3 rounded-md align-center p-4">
            <input
              type="email"
              placeholder="Email Address"
              className="outline-none border-none overflow-auto placeholder:text-[rgba(0, 0, 0, 0.5)] bg-inherit"
            />
            <img src={Send.src} alt="telegram logo" className="w-5" />
          </div>
        </article>
      </Container>
    </section>
  );
}

export default Footer;
