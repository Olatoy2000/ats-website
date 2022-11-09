import React from "react";
import AllowCommentBlog from "../../src/allowcommentblog";
import MORE_BLOG_POST from "../../src/bloglayout/moreblogpost";
import Xpertbackestablished from "../../src/bloglayout/xpertbackestablished";

function index() {
  return (
    <section>
      <Xpertbackestablished />
      <AllowCommentBlog />
      <MORE_BLOG_POST />
    </section>
  );
}

export default index;
