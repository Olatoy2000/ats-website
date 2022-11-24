import { Divider } from "@mantine/core";
import axios from "axios";
import { ArrowCircleRight2, ArrowCircleLeft2 } from "iconsax-react";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Container from "../../components/Container";
import GrassLand from "./assets/grassland.png";

export default function MORE_BLOG_POST() {
  // const MORE_BLOG_POST = [
  //   {
  //     id: 1,
  //     picture: GrassLand.src,
  //     title: "Ways Commodity Exchanges can help...",
  //     subTitle:
  //       "Lorem ipsum dolor sit amet tor, sodales arcu quis, malesuada...",
  //   },
  //   {
  //     id: 2,
  //     picture: GrassLand.src,
  //     title: "Ways Commodity Exchanges can help...",
  //     subTitle:
  //       "Lorem ipsum dolor sit amet tor, sodales arcu quis, malesuada...",
  //   },
  //   {
  //     id: 3,
  //     picture: GrassLand.src,
  //     title: "Ways Commodity Exchanges can help...",
  //     subTitle:
  //       "Lorem ipsum dolor sit amet tor, sodales arcu quis, malesuada...",
  //   },
  //   {
  //     id: 4,
  //     picture: GrassLand.src,
  //     title: "Ways Commodity Exchanges can help...",
  //     subTitle:
  //       "Lorem ipsum dolor sit amet tor, sodales arcu quis, malesuada...",
  //   },
  //   {
  //     id: 5,
  //     picture: GrassLand.src,
  //     title: "Ways Commodity Exchanges can help...",
  //     subTitle:
  //       "Lorem ipsum dolor sit amet tor, sodales arcu quis, malesuada...",
  //   },
  //   {
  //     id: 6,
  //     picture: GrassLand.src,
  //     title: "Ways Commodity Exchanges can help...",
  //     subTitle:
  //       "Lorem ipsum dolor sit amet tor, sodales arcu quis, malesuada...",
  //   },
  //   {
  //     id: 7,
  //     picture: GrassLand.src,
  //     title: "Ways Commodity Exchanges can help...",
  //     subTitle:
  //       "Lorem ipsum dolor sit amet tor, sodales arcu quis, malesuada...",
  //   },
  //   {
  //     id: 8,
  //     picture: GrassLand.src,
  //     title: "Ways Commodity Exchanges can help...",
  //     subTitle:
  //       "Lorem ipsum dolor sit amet tor, sodales arcu quis, malesuada...",
  //   },
  //   {
  //     id: 9,
  //     picture: GrassLand.src,
  //     title: "Ways Commodity Exchanges can help...",
  //     subTitle:
  //       "Lorem ipsum dolor sit amet tor, sodales arcu quis, malesuada...",
  //   },
  //   {
  //     id: 10,
  //     picture: GrassLand.src,
  //     title: "Ways Commodity Exchanges can help...",
  //     subTitle:
  //       "Lorem ipsum dolor sit amet tor, sodales arcu quis, malesuada...",
  //   },
  // ];

  const scrollRefs = useRef<HTMLDivElement>(null);

  const moveRight = () => {
    const width = scrollRefs.current!.clientWidth;
    scrollRefs.current!.scrollLeft = scrollRefs.current!.scrollLeft + width;
  };

  const moveLeft = () => {
    const width = scrollRefs.current!.clientWidth;
    scrollRefs.current!.scrollLeft = scrollRefs.current!.scrollLeft - width;
  };

  const router = useRouter();
  const [blogDetail, setBlogDetail] = useState<any>(null);

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

  return (
    <Container>
      <section className="flex flex-col gap-2">
        <article className="flex justify-between items-center">
          <h2 className="text-bold-maastrichtBlue font-bold text-[1.5rem] leading-8">
            More Blog Posts
          </h2>
          <div className="flex gap-3">
            <ArrowCircleLeft2
              size="32"
              color="#000"
              onClick={moveLeft}
              className="cursor-pointer"
            />
            <ArrowCircleRight2
              size="32"
              color="#000"
              onClick={moveRight}
              className="cursor-pointer"
            />
          </div>
        </article>
        <Divider />
        <div
          id="slider"
          ref={scrollRefs}
          className="mb-6 overflow-x-hidden scroll-smooth  gap-8 flex"
        >
          {blogDetail.map((item: any, idx: number) => (
            <article
              className={`grid gap-4 py-4 duration-1000 grid-cols-[150px_150px]`}
              key={idx}
            >
              <img src={blogDetail.image} alt="" className="w-full" />
              <div className="flex justify-end items-end gap-2 flex-col">
                <h5 className="text-[#020202] text-[1rem] font-bold leading-6">
                  {blogDetail.title}
                </h5>
                <p className="flex text-[#020202] leading-4 font-normal text-[0.75rem]">
                  {blogDetail.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Container>
  );
}
