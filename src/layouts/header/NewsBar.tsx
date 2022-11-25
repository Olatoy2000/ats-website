import axios from "axios";
import { Fragment, useEffect, useState } from "react";

export default function NewsBar() {
  const [newsBar, setNewsBar] = useState<any>(null);
  const fetchNewsBar = () => {
    axios(`api/v1/nav-news`)
      .then((response) => {
        setNewsBar(response.data.data);
      })

      .catch(console.log);
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
