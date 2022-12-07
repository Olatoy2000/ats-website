import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import CryptoJS from "crypto-js";
import sha256 from "crypto-js/sha256";

export default function NewsBar() {
  const [newsBar, setNewsBar] = useState<any>(null);
  var key = CryptoJS.enc.Utf8.parse("bQeThWmZq4t7w9z$C&F)J@NcRfUjXn2r");
  var iv = CryptoJS.enc.Utf8.parse("s6v9y$B&E)H@McQf");

  const fetchNewsBar = () => {
    const requestTs = String(Date.now())
    axios(process.env.NEXT_PUBLIC_BASE_URL + `/api/v1/nav-news`, {
      method: "get",
      headers: {
        "api-key": `${process.env.NEXT_PUBLIC_APP_API_KEY}`,
        "request-ts": "1669397556", 
        "hash-key": `${process.env.NEXT_PUBLIC_HASH_KEY}`
      }
    }
    )
      .then((response) => {
        console.log(key)
        console.log(response.data)
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
                      {CryptoJS.AES.decrypt(el.category_name, key, { iv: iv }).toString(CryptoJS.enc.Utf8)}
                    </span>
                    {CryptoJS.AES.decrypt(el.title, key, { iv: iv }).toString(CryptoJS.enc.Utf8)}
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
