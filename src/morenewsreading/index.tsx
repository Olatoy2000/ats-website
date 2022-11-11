import AfexNewsUpdate from "./assets/afexnewsupdate.png";
import{ ArrowCircleLeft2, ArrowCircleRight2 } from "iconsax-react";
import { Divider } from "@mantine/core";
import Container from "../components/Container";
export default function READ_NEWS_ARTICLE() {

    const READ_NEWS_ARTICLE = [
        {
      id: 1,
      picture: AfexNewsUpdate.src,
      title: "Ways Commodity Exchanges can help...",
      subTitle:
        "Lorem ipsum dolor sit amet tor, sodales arcu quis, malesuada...",
    },
    {
      id: 2,
      picture: AfexNewsUpdate.src,
      title: "Ways Commodity Exchanges can help...",
      subTitle:
        "Lorem ipsum dolor sit amet tor, sodales arcu quis, malesuada...",
    },
    {
      id: 3,
      picture: AfexNewsUpdate.src,
      title: "Ways Commodity Exchanges can help...",
      subTitle:
        "Lorem ipsum dolor sit amet tor, sodales arcu quis, malesuada...",
    },
    {
      id: 4,
      picture: AfexNewsUpdate.src,
      title: "Ways Commodity Exchanges can help...",
      subTitle:
        "Lorem ipsum dolor sit amet tor, sodales arcu quis, malesuada...",
    },
    {
      id: 5,
      picture: AfexNewsUpdate.src,
      title: "Ways Commodity Exchanges can help...",
      subTitle:
        "Lorem ipsum dolor sit amet tor, sodales arcu quis, malesuada...",
    },
    {
      id: 6,
      picture: AfexNewsUpdate.src,
      title: "Ways Commodity Exchanges can help...",
      subTitle:
        "Lorem ipsum dolor sit amet tor, sodales arcu quis, malesuada...",
    },
    {
      id: 7,
      picture: AfexNewsUpdate.src,
      title: "Ways Commodity Exchanges can help...",
      subTitle:
        "Lorem ipsum dolor sit amet tor, sodales arcu quis, malesuada...",
    },
    {
      id: 8,
      picture: AfexNewsUpdate.src,
      title: "Ways Commodity Exchanges can help...",
      subTitle:
        "Lorem ipsum dolor sit amet tor, sodales arcu quis, malesuada...",
    },
    {
      id: 9,
      picture: AfexNewsUpdate.src,
      title: "Ways Commodity Exchanges can help...",
      subTitle:
        "Lorem ipsum dolor sit amet tor, sodales arcu quis, malesuada...",
    },
    {
      id: 10,
      picture: AfexNewsUpdate.src,
      title: "Ways Commodity Exchanges can help...",
      subTitle:
        "Lorem ipsum dolor sit amet tor, sodales arcu quis, malesuada...",
    },
  ];

  return (
    <Container>
      <section className="flex flex-col gap-2">
        <article className="flex justify-between items-center">
          <h2 className="text-bold-maastrichtBlue font-bold text-[1.5rem] leading-8">
            More Blog Posts
          </h2>
          <div className="flex gap-3">
            <ArrowCircleLeft2 size="32" color="#000" />
            <ArrowCircleRight2 size="32" color="#000" />
          </div>
        </article>
        <Divider />
        <article className="mb-6 overflow-x-scroll gap-8 flex">
          {READ_NEWS_ARTICLE.map((item, idx) => (
            <article
              className="grid gap-4 py-4 grid-cols-[150px_150px]"
              key={idx}
            >
              <img src={item.picture} alt="" className="w-full" />
              <div className="flex justify-end items-end gap-2 flex-col">
                <h5 className="text-[#020202] text-[1rem] font-bold leading-6">
                  {item.title}
                </h5>
                <p className="flex text-[#020202] leading-4 font-normal text-[0.75rem]">
                  {item.subTitle}
                </p>
              </div>
            </article>
          ))}
        </article>
      </section>
    </Container>
  );
}
