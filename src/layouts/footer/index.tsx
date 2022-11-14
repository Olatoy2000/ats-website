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
    <section className="bg-black w-full">
      {/* <div className="grid max-w-screen-2xl mx-auto w-5/6 px-[clamp(1.5rem,6vw,6rem)] grid-cols-[2fr_3fr_1fr_1fr]  py-12 gap-12">
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
          <h3 className="text-[#A09D9D] leading-7 uppercase text-[1.25rem] font-bold">
            contact us
          </h3>
          <ul className="font-normal list-none leading-6 text-[1rem] text-white">
            <li className="whitespace-nowrap">
              07000CALLAFEX (+234 70 002 255 2339)
            </li>
            <li>For Inquiries (contactus@afexnigeria.com)</li>
            <li> For Complaints and Resolution updates</li>
            <li>(support@afexnigeria.com)</li>
          </ul>
        </article>
        <article className="flex flex-col gap-4">
          <h3 className="text-[#A09D9D;] whitespace-nowrap leading-7 uppercase text-[1.25rem] font-bold">
            quick links
          </h3>
          <div className="font-normal leading-6 text-white">
            <ul className="leading-6 font-bold text-[1rem]">
              <Link href="/atslogin">
                <li className="pb-4">Login</li>
              </Link>
              <Link href="/courses">
                <li className="pb-4">Courses</li>
              </Link>
              <Link href="/contact us">
                <li className="pb-4">Contact Us</li>
              </Link>
              <Link href="/login">
                <li className="pb-4">Privacy Policy</li>
              </Link>
            </ul>
          </div>
        </article>
        <article className="flex flex-col gap-4">
          <div className="flex gap-4">
            <ul className="flex gap-4 justify-between">
              <li>
                <a
                  href="https://www.instagram.com/afexnigeria/"
                  target="_blank"
                >
                  <img
                    src={Instagram.src}
                    alt="Instagram Logo"
                    className="w-10"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100046536650064"
                  target="_blank"
                >
                  <img src={FaceBook.src} alt="Facebook" className="w-10" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/afex-commodities-exchange"
                  target="_blank"
                >
                  <img
                    src={LinkedIn.src}
                    alt="Instagram Logo"
                    className="w-10"
                  />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/AFEXNigeria" target="_blank">
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
              className="outline-none border-none overflow-auto text-white placeholder:text-[rgba(0, 0, 0, 0.5)] bg-inherit"
            />
            <img src={Send.src} alt="telegram logo" className="w-5" />
          </div>
        </article>
      </div> */}
      <Container> 
      <article className="footer">
        <div className="footer_add">
          <h3 className="text-[#A09D9D] mb-4 leading-7 uppercase text-[1.25rem] font-bold">
            address
          </h3>
          <p className="font-normal leading-6 text-white">
            AFEX Tech Hub. Christiana Oyinade House, Beside First Bank, Iwo
            Road, Ibadan.
          </p>
          <p className="text-[0.8125rem] text-white font-normal leading-10 ats-address">
            &copy; 2022 AFEX NIGERIA
          </p>
        </div>
        <div className="footer_cont">
          <h3 className="text-[#A09D9D] mb-4 leading-7 uppercase text-[1.25rem] font-bold">
            contact us
          </h3>
          <ul className="font-normal list-none leading-6 text-[1rem] text-white">
            <li className="whitespace-nowrap">
              07000CALLAFEX (+234 70 002 255 2339)
            </li>
            <li>For Inquiries (contactus@afexnigeria.com)</li>
            <li> For Complaints and Resolution updates</li>
            <li>(support@afexnigeria.com)</li>
          </ul>
        </div>
        <div className="footer_quick">
          <h3 className="text-[#A09D9D;] whitespace-nowrap mb-4 leading-7 uppercase text-[1.25rem] font-bold">
            quick links
          </h3>
          <div className="font-normal leading-6 text-white">
            <ul className="leading-6 font-bold text-[1rem]">
              <Link href="/atslogin">
                <li className="pb-2">Login</li>
              </Link>
              <Link href="/courses">
                <li className="pb-2">Courses</li>
              </Link>
              <Link href="/contact us">
                <li className="pb-2">Contact Us</li>
              </Link>
              <Link href="/login">
                <li className="pb-2">Privacy Policy</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="footer_social-media">
          <div className="flex gap-4">
            <ul className="flex gap-4 justify-between">
              <li>
                <a
                  href="https://www.instagram.com/afexnigeria/"
                  target="_blank"
                >
                  <img
                    src={Instagram.src}
                    alt="Instagram Logo"
                    className="w-10"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100046536650064"
                  target="_blank"
                >
                  <img src={FaceBook.src} alt="Facebook" className="w-10" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/afex-commodities-exchange"
                  target="_blank"
                >
                  <img
                    src={LinkedIn.src}
                    alt="Instagram Logo"
                    className="w-10"
                  />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/AFEXNigeria" target="_blank">
                  <img
                    src={Twitter.src}
                    alt="Instagram Logo"
                    className="w-10"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="flex mt-7 bg-[#383838] w-fit justify-between gap-2 rounded-md align-center p-2">
            <input
              type="email"
              placeholder="Email Address"
              className="outline-none border-none overflow-auto text-white placeholder:text-[rgba(0, 0, 0, 0.5)] bg-inherit"
            />
            <img src={Send.src} alt="telegram logo" className="w-4" />
          </div>
        </div>
      </article>
       </Container>
    </section>
  );
}

export default Footer;
