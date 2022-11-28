import React from "react";
import READ_NEWS_ARTICLE from "../../src/morenewsreading";
import NewsBackground from "../../src/newslayout/newsbackground";
import NewsPost from "../../src/newslayout/newsfeed";

function index() {
  return (
    <div>
      <NewsBackground />
      {/* <NewsPost /> */}
      <READ_NEWS_ARTICLE />
    </div>
  );
}

export default index;
