import React from "react";
import CommentBlog from "../../src/bloglayout/commentblog";
import MORE_BLOG_POST from "../../src/bloglayout/moreblogpost";
import Xpertbackestablished from "../../src/bloglayout/xpertbackestablished";


function index() {
  return (
    <div>
      <Xpertbackestablished />
      <CommentBlog />
      <MORE_BLOG_POST />
    </div>
  );
}

export default index;
