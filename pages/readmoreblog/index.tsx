import React from "react";
import CommentBlog from "../../src/bloglayout/commentblog";
import MORE_BLOG_POST from "../../src/bloglayout/moreblogpost";
import XpertBackEstablished from "../../src/bloglayout/xpertbackestablished";


function index() {
  return (
    <div>
      <XpertBackEstablished />
       <CommentBlog />
      <MORE_BLOG_POST /> 
    </div>
  );
}

export default index;
