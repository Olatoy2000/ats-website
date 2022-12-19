import React from "react";
import AllowCommentBlog from "../../src/allowcommentblog";
import MORE_BLOG_POST from "../../src/bloglayout/moreblogpost";
import XpertBackEstablished from "../../src/bloglayout/xpertbackestablished";

function index() {
  return (
    <section>
      <XpertBackEstablished />
      <AllowCommentBlog />
      <MORE_BLOG_POST />
    </section>
  );
}

export default index;
