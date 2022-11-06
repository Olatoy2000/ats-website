import React, { useState } from "react";
import BackToUpdate from "../../src/components/backToUpdates";
import GroupPicture from "../../src/components/backToUpdates/assets/group-picture.png";
import GroupPicture2 from "../../src/components/backToUpdates/assets/group-picture2.png";
import { Pagination } from "@mantine/core";

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
    <div>
      <BackToUpdate />
      <article className="flex flex-col gap-[30px]">
        {galleryData.map(({ date, picture }, idx) => (
          
          <section key={idx}>
            <p>{date}</p>
            <ul className="grid grid-cols-5 gap-[15px]">
              {picture.map((item, id) => (
                <li key={id}>
                  <img className="w-full object-cover" src={item} alt="" />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </article>
      {/* <Pagination total={galleryData} /> */}
    </div>
  );
}

export default index;
