import React, { useState } from "react";
import BackToUpdate from "../../src/components/backToUpdates";
import GroupPicture from "../../src/components/backToUpdates/assets/group-picture.png";
import GroupPicture2 from "../../src/components/backToUpdates/assets/group-picture2.png";
import { Pagination } from "@mantine/core";
import Container from "../../src/components/Container";

const galleryData = [
  {
    date: "11/2022",
    picture: [
      GroupPicture.src,
      GroupPicture.src,
      GroupPicture.src,
      GroupPicture.src,
      GroupPicture.src,
      GroupPicture.src,
    ],
  },
  {
    date: "12/2022",
    picture: [
      GroupPicture2.src,
      GroupPicture2.src,
      GroupPicture2.src,
      GroupPicture2.src,
      GroupPicture2.src,
      GroupPicture2.src,
    ],
  },
  {
    date: "1/2023",
    picture: [
      GroupPicture2.src,
      GroupPicture2.src,
      GroupPicture2.src,
      GroupPicture2.src,
      GroupPicture2.src,
      GroupPicture2.src,
    ],
  },
  {
    date: "2/2023",
    picture: [
      GroupPicture2.src,
      GroupPicture2.src,
      GroupPicture2.src,
      GroupPicture2.src,
      GroupPicture2.src,
      GroupPicture2.src,
    ],
  },
  {
    date: "3/2023",
    picture: [
      GroupPicture2.src,
      GroupPicture2.src,
      GroupPicture2.src,
      GroupPicture2.src,
      GroupPicture2.src,
      GroupPicture2.src,
    ],
  },
];

function index() {
  const [page, setPage] = useState(1);
  return (
    <Container className="my-10 flex flex-col gap-8">
      <BackToUpdate />
      <section className="flex flex-col gap-[30px]">
        {galleryData.map(({ date, picture }, idx) => (
          <section key={idx}>
            <p className="text-[#C81107] pb-[1.125rem] text-[1.25rem] leading-7 font-bold">
              {date}
            </p>
            <ul className="grid grid-cols-6 gap-[15px]">
              {picture.map((item, id) => (
                <li key={id}>
                  <img
                    className="w-full object-cover"
                    src={item}
                    alt="galleries of Afex tech stars"
                  />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </section>
      {/* <Pagination total={galleryData} /> */}
      <section className="flex justify-between">
        <div style={{borderRadius: "5px", border: "1px solid #C4C4C4"}} className="p-3">1-8 of 200 Entries</div>
        <article className="flex gap-3">
          <button className="bg-[#C81107] border flex justify-between p-2 gap-2 items-center rounded-md text[0.9374rem] text-white font-normal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                stroke="#FFF"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                d="M9.57 5.93L3.5 12l6.07 6.07M20.5 12H3.67"
              ></path>
            </svg>
            Prev
          </button>
          <Pagination
            total={10}
            styles={{
              item: {
                "&[data-active]": {
                  backgroundColor: "#C81107",
                },
              },
            }}
            withControls={false}
          />
          <button className="bg-[#C81107] border flex justify-between p-2 gap-2 items-center rounded-md text[0.9374rem] text-white font-normal">
            Next
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                stroke="#FFF"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                d="M14.43 5.93L20.5 12l-6.07 6.07M3.5 12h16.83"
              ></path>
            </svg>
          </button>
        </article>
      </section>
    </Container>
  );
}

export default index;