import React from "react";
import News from "../../src/components/NewsArticle/NewsArticle";
import Navbar from "../../src/components/Navbar/Navbar";
import SearchEntries from "../../src/components/SearchEntries";
import axios from "axios";

//The newssearch in the Updates of the landing page
function index({ news: [] }) {
  return (
    <div className="flex flex-col mx-auto md:w-[85%] gap-9 max-w-screen-2xl">
      <Navbar />
      <News />
      <SearchEntries />
    </div>
  );
}

export async function getServerSideProps() {
  axios.defaults.headers.common["API-KEY"] = process.env.NEXT_PULIC_APP_API_KEY;
  axios.defaults.headers.common["HASH-KEY"] = process.env.NEXT_PUBLIC_HASH_KEY;
  axios.defaults.headers.common["REQUEST-TS"] =
    process.env.NEXT_PUBLIC_REQUEST_TS;
  const response = await axios.get(`${process.env.BASE_URL}/api/v1/news`);
  console.log(response);
  console.log("Hello from Nav");
  const news = await response.data;
  return {
    props: news,
  };
}
export default index;
