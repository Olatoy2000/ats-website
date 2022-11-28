import React, { useEffect, useState } from "react";
import Placeholder from "./assets/placeholder.png";
import SeeMore1 from "./assets/SeeMore3 icon.png";
import SeeMore2 from "./assets/SeeLess icon.png";
import { useRef } from "react";
import Link from "next/link";
import axios from "axios";
import moment from "moment";
import { useQuery } from "@tanstack/react-query";

//Blogs part in the Updates page
const blogArticleSample = {
  status: "success",
  status_code: 200,
  data: {
    count: 3,
    next: null,
    previous: null,
    results: [
      {
        id: 3,
        title: "NESG 2022",
        intro:
          'We are glad to be one of the sponsors of the 28th edition of the Nigerian Economic Summit Group (NESG).\n\nThe theme for the year is 2023 and Beyond: Priorities for Shared Prosperity.\n\nWe are inviting everyone, to join us tomorrow at this dinner session as we discuss "Positioning the capital markets to leverage Commodities Exchange for shared prosperity".\nThis session will explore Nigeria’s commodit',
        description:
          'We are glad to be one of the sponsors of the 28th edition of the Nigerian Economic Summit Group (NESG).\n\nThe theme for the year is 2023 and Beyond: Priorities for Shared Prosperity.\n\nWe are inviting everyone, to join us tomorrow at this dinner session as we discuss "Positioning the capital markets to leverage Commodities Exchange for shared prosperity".\nThis session will explore Nigeria’s commodities exchange ecosystem, challenges, and opportunities and examine how shared prosperity can be achieved through a fast-growing commodity exchange ecosystem.\n\nTime: 7 PM\nVenue: Transcrop Hilton, Abuja.\n\nIn Abuja? Dine with us, registration is free.\n\nhttps://lnkd.in/dStw2fAn\n\nSee you there!',
        created_at: "2022-11-15T11:11:26.754100+01:00",
        author: {
          id: 1,
          first_name: "Gloria",
          last_name: "Eronmonsele",
          email: "egloria@afexnigeria.com",
          bio: "Talent Management Analyst",
          profile_pics:
            "http://atsbk.afexats.com/media/media/profile_pic/glo.jpg",
        },
        url: "http://atsbk.afexats.com/api/v1/blogs/3",
        image:
          "http://atsbk.afexats.com/media/media/blog_article/images/NESG.jpg",
        min_read: "less than a minute read",
        author_fullname: "Gloria Eronmonsele",
      },
      {
        id: 2,
        title: "Crop Production Report Unveiling 2022",
        intro:
          "Our Crop Production Report unveiling event will have a panel session, where we’ll be discussing the report and relevant topics surrounding the Crop Production forecast for the 2022/2023 wet session. \n\nJoin our Head, Food Security Funds, Nathaniel Etim, alongside other experts on the 16th of November as we unveil our 2022 AFEX Crop Production Report.\n\nWe are excited and looking forward to seeing yo",
        description:
          "Our Crop Production Report unveiling event will have a panel session, where we’ll be discussing the report and relevant topics surrounding the Crop Production forecast for the 2022/2023 wet session. \n\nJoin our Head, Food Security Funds, Nathaniel Etim, alongside other experts on the 16th of November as we unveil our 2022 AFEX Crop Production Report.\n\nWe are excited and looking forward to seeing you.\n\nTo register, click on the link below.\nhttps://lnkd.in/dFhjmY35\n\n\n#cropproductionreport #AFEXCP #AFEX",
        created_at: "2022-11-15T11:09:14.445829+01:00",
        author: {
          id: 1,
          first_name: "Gloria",
          last_name: "Eronmonsele",
          email: "egloria@afexnigeria.com",
          bio: "Talent Management Analyst",
          profile_pics:
            "http://atsbk.afexats.com/media/media/profile_pic/glo.jpg",
        },
        url: "http://atsbk.afexats.com/api/v1/blogs/2",
        image:
          "http://atsbk.afexats.com/media/media/blog_article/images/CR.jpg",
        min_read: "less than a minute read",
        author_fullname: "Gloria Eronmonsele",
      },
      {
        id: 1,
        title: "Yay! AFEX Grain Quality Enhancement Center",
        intro:
          "The Governor of Kaduna State, Nasir El-RufaiThanks to our partner Kaduna Investment Promotion Agency (KADIPA) and other stakeholders. The grain quality enhancement center will foster improvement on quality and quantity of supply, and cause more positive ripple effects in the agricultural value chain .",
        description:
          "The Governor of Kaduna State, Nasir El-RufaiThanks to our partner Kaduna Investment Promotion Agency (KADIPA) and other stakeholders. The grain quality enhancement center will foster improvement on quality and quantity of supply, and cause more positive ripple effects in the agricultural value chain .",
        created_at: "2022-11-15T11:05:48.549589+01:00",
        author: {
          id: 1,
          first_name: "Gloria",
          last_name: "Eronmonsele",
          email: "egloria@afexnigeria.com",
          bio: "Talent Management Analyst",
          profile_pics:
            "http://atsbk.afexats.com/media/media/profile_pic/glo.jpg",
        },
        url: "http://atsbk.afexats.com/api/v1/blogs/1",
        image:
          "http://atsbk.afexats.com/media/media/blog_article/images/GrainQ.jpg",
        min_read: "less than a minute read",
        author_fullname: "Gloria Eronmonsele",
      },
    ],
  },
  message: "Successfully Retrieved",
};
type Blogs = typeof blogArticleSample;
function BlogArticle() {
  const scrollRefs = useRef<HTMLDivElement>(null);

  const moveRight = () => {
    const width = scrollRefs.current!.clientWidth;

    scrollRefs.current!.scrollLeft = scrollRefs.current!.scrollLeft + width;
  };

  const moveLeft = () => {
    const width = scrollRefs.current!.clientWidth;

    scrollRefs.current!.scrollLeft = scrollRefs.current!.scrollLeft - width;
  };

  const { data: blogArticle, isLoading } = useQuery<Blogs>(
    ["Blog-Article"],
    async () =>
      axios("/api/v1/blogs")
        .then(({ data }) => data)
        .catch((e) => e)
  );

  return (
    <>
      <div
        ref={scrollRefs}
        className="grid overflow-x-scroll py-5 gap-9 grid-flow-col scrollbar-hide"
        id="BlogArticle"
      >
        {blogArticle?.data?.results.map(
          (
            {
              id,
              title,
              intro,
              created_at,
              author,
              image,
              min_read,
              author_fullname,
            }: any,
            idx: number
          ) => (
            <div
              key={idx}
              className="flex flex-col pb-[15px] shadow-xl lg:w-96 md:w-80 w-64 rounded-md"
            >
              <img
                src={image ? image : Placeholder.src}
                className="h-96 object-cover w-full"
              />
              <Link href={`/blog/${id}`}>
                <p className="text-[#2D3748] text-[clamp(1rem,1.5vw,1.25rem)] font-bold p-4">
                  {title}
                </p>
              </Link>
              <p className="text-[#718096] flex-1 text-sm px-4">
                {intro + "..."}
              </p>
              <div className="flex gap-3 pt-10 items-center px-4">
                <img src={author} className="h-10" />
                <div className="font-sans flex-1">
                  <p className="text-[#C81107] text-xs font-semibold">
                    {author_fullname}
                  </p>
                  <span className="flex justify-between items-center">
                    <p className="text-[#6F6F70] font-semibold text-[10px]">
                      <span>
                        {moment(created_at).format("ll").split(",")[0]}
                      </span>{" "}
                      &nbsp;&nbsp; {min_read}
                    </p>
                    <Link href={`/blog/${id}`}>
                      <span className="text-[15px] text-[#2D3748] font-bold -mt-1">
                        Read more
                      </span>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          )
        )}
      </div>
      <div className="flex justify-between">
        <button
          className="flex gap-2 bggradi rounded-lg lg:p-4 md:p-4 p-2 items-center group-hover:bg-black"
          onClick={moveLeft}
        >
          <span className="text-white">See Less</span>
          <img src={SeeMore2.src} />
        </button>
        <button
          onClick={moveRight}
          className="flex gap-2 bggradi rounded-lg lg:p-4 md:p-4 p-2 items-center group-hover:bg-black"
        >
          <span className="text-white">See More</span>
          <img src={SeeMore1.src} />
        </button>
      </div>
    </>
  );
}

export default BlogArticle;
