import axios from "axios";
import { Fragment, useEffect, useState } from "react";

export default function NewsBar() {
  const [newsBar, setNewsBar] = useState<any>(null);
  const fetchNewsBar = () => {
    axios(`api/v1/nav-news`, {
      method: "get",
      url: "https://atsbk.afexats.com/api/v1/nav-news",
      headers: {
        "api-key": "7w!z%C*F-JaNdRgUkXn2r5u8x/A?D(G+KbPeShVmYq3s6v9y$B&E)H@McQfTjWnZ",
        "hash-key": "091fdc6ac81fde9d5bccc8aa0e52f504a2a5a71ad51624b094c26f6e51502b5a",
        "request-ts": "1669397556",
      }
    }

    )
      .then((response) => {
        setNewsBar(response.data.data);
      })

      .catch((error) => {
        console.log(error)
      })
  };

  useEffect(() => {
    fetchNewsBar();
  }, []);
  return (
    <div className="mantine-Group-root border-b border-b-[#efefef] flex w-full clump:pt-[clamp(1rem,4vw,4rem)] overflow-hidden mantine-dghak8">
      <button className="mantine-Text-root p-3 leading-6 bg-[#DC372F] font-bold  text-[#fff] mantine-ssm15l">
        LATEST NEWS
      </button>
      <div className="flex flex-1 overflow-hidden marquee css-1nkfwl">
        {Array.from({ length: 3 }, () => (
          <ul
            key={Math.random()}
            className="flex gap-8 mr-6 h-auto leading-6 pt-3"
          >
            {newsBar?.map((item: any, id: number) => (
              <Fragment key={id}>
                {newsBar?.map((el: any, idx: number) => (
                  <li key={idx} className="whitespace-nowrap text-[#030000]">
                    <span className="text-[#DC372F] mr-2 text-[1.14rem] whitespace-nowrap font-bold">
                      {el.category_name}:
                    </span>
                    {el.title}
                  </li>
                ))}
              </Fragment>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
function setNewBar(results: any) {
  throw new Error("Function not implemented.");
}
