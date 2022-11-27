import React, { useEffect, useState } from "react";
import CommentBlog from "../../src/bloglayout/commentblog";
import Xpertbackestablished from "../../src/bloglayout/xpertbackestablished";
import MORE_BLOG_POST from "../../src/moreblogpostview";
import { useRouter } from "next/router";
import axios from "axios";
import $ from "jquery";

function index() {
  const router = useRouter();
  const [blogDetail, setBlogDetail] = useState(null);

  const fetchBlogDetails = () => {
    let config = {
      method: "get",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/blogs/${router.query.blogId}`,
    };

    axios(config)
      .then((response) => {
        setBlogDetail(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (router.query.blogId) fetchBlogDetails();
  }, [router.query.blogId]);


  // useEffect(() => {
  //   router.query.id &&
  //     $(function () {
  //       setInterval(function () {
  //         $.ajax({
  //           type: "GET",
  //           url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/blogs/${router.query.blogId}`,
  //           success: (response) => {
  //             console.log(response.data.data);
  //           },
  //           error: function (response) {
  //             alert("an error occured");
  //           },
  //         });
  //       }, 1000);
  //     });
  // }, []);

  return blogDetail ? (
    <div>
      <Xpertbackestablished blogDetail={blogDetail} />
      <CommentBlog blogDetail={blogDetail} />
      <MORE_BLOG_POST routeId={router.query.blogId} />
    </div>
  ) : null;
}

export default index;
