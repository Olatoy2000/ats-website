import Container from "../../components/Container";
import Link from "next/link";
import { TagRight } from "iconsax-react";
import CryptoJS from "crypto-js";
import axios from "axios";
import router from "next/router";

var key = CryptoJS.enc.Utf8.parse("bQeThWmZq4t7w9z$C&F)J@NcRfUjXn2r");
var iv = CryptoJS.enc.Utf8.parse("s6v9y$B&E)H@McQf");

const decrypt = (element: any) => {
  return CryptoJS.AES.decrypt(element, key, { iv: iv }).toString(
    CryptoJS.enc.Utf8
  )
    ;
};

export default function NewsBackground({ newsDetail }: any) {

  return (
    <Container>
      <section className="flex flex-col gap-8 mb-10">
        <Link href="/updates" className="self-end">
          <button className="bg-[#C81107] flex gap-4 justify-between p-2 focus-within:bg-black leading-6 text-white font-bold rounded-md items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="#FFF"
            >
              <path
                stroke="#C81107"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM15.5 12h-6"
              ></path>
              <path
                stroke="#C81107"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M11.5 9l-3 3 3 3"
              ></path>
            </svg>
            Back to Updates
          </button>
        </Link>
        <article
          className="flex z-[-1] justify-center items-center pt-28 flex-col gap-8"
          style={{
            background: `url(${decrypt(newsDetail.image)})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "relative",
            backgroundPosition: "100%",
            objectFit: "cover",
            height: "80vh",
          }}
        >
          <div className="absolute left-0 right-0 bottom-0 top-0 bg-[#020000] opacity-50"></div>
          <p className=" text-light-antiFlashWhite leading-[4rem] z-20 text-center font-bold text-[clamp(1.5rem,3.5vw,4rem)]">
            {decrypt(newsDetail.title)}
          </p>
          <div className="flex gap-2 items-center z-50 justify-center">
            <TagRight color="#9FA19C" variant="Bulk" size={24} />
            <h3 className="font-bold text-[clamp(0.625rem,1.5vw,1.5rem)] text-[#9FA19C] leading-7 font-['Poppins']">
              {newsDetail && decrypt(newsDetail.category.name)}
            </h3>
          </div>
        </article>
      </section>
    </Container>
  );
}
