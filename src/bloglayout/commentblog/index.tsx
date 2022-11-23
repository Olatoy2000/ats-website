import { Fragment } from "react";
import Container from "../../components/Container";
import GloriaTelentManagement from "./assets/tmgloria.png";
import XpertLogo from "./assets/newxpert.png";

export default function CommentBlog() {
  const BLOGS = [
    {
      id: 1,
      author: "Gloria Eromonsele",
      date_published: "a week ago",
      read_time: "4 min",
      picture: GloriaTelentManagement.src,
      blog_text:
        "AFEX, Nigeria's leading commodities market player, on Monday, rang the bell for financial literacy to flag off the sixth edition of World Investor Week 2022, in collaboration with the Securities and Exchange Commission (SEC) and Financial Literacy Technical Committee (FLTC) at a ring the bell ceremony held at the Exchange office in Lagos State. The ring-the-bell ceremony flags off a week-long event themed “Investor Resilience and Sustainable Finance”, which is aimed at driving awareness about the importance of investor education and protection, while also promoting financial literacy and inclusion that can engender shared prosperity in the commodities market. As a commodities exchange, AFEX has invested in financial education initiatives to enhance financial literacy among investors and improve participation for retail and institutional investors in the commodities market. Over a span of eight years, the Exchange has executed a number of robust education campaigns to deepen the financial market knowledge and confidence of investors through digitally distributed learning materials, data-driven market reports, webinars, and outreach programs, which have driven up active participation in the commodities market. “AFEX is pleased to once again ring the bell to advocate for financial literacy on the commodities market in Africa. Financial literacy and investor protection are important tenets that drive growth and inclusivity in the financial market, and as part of our efforts to promote sustainability in the ecosystem, we have developed a wholistic engagement framework that empowers retail and institutional investors to take advantage of the opportunities in the commodities market within the current market environment. Currently, we are gearing up to launch a four-part comic book designed to educate new and existing investors of all ages on how the commodities market works and how they can grow their wealth by leveraging alternative assest classes. As a participation grows, it is improtant to simplify financial management and investment so that no one is left behind in the commodities ecoysystem, stated, Oluwafunto Olasemo, Vice President, Financial Markets, at AFEX. To bridge knowledge gaps, initiatives like knowledge-sharing sessions, video tutorials, one-on-one sessions with financial experts, and detailed reports on commodity value chains are being incorporated into AFEX's technology platforms, allowing access to important trading data, trends, and financial information, thereby bringing support and growth to the commodities market. According to Fiona Ahime, MD, FBN Quest, “Investors should embrace diversification of investment”. Charles Egbunonwo, the MD of Forthright Securities, and a member of the Financial Literacy Committee also commented that “It is important to create awareness on financial literacy to unlock the potentials in the commodities space. If we are looking to diversify our economy, commodities are one of the key products to consider and develop. I am happy we are putting hands together to propagate the investment culture in the commodities market. Achieving investor resilience and sustainable finance requires a broad-based effort on the part of all capital market players to provide investors with the tools and knowledge required to make informed investment decisions. Addressing these core areas lays a foundation for market intergrity that will enable a thriving commodities market and shared prosperity for everyone involved.",
      comments: [
        {
          contributor: "Mr Money",
          date: "Today",
          picture: XpertLogo.src,
          comment:
            "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete",
        },
        {
          contributor: "Mr Money",
          date: "2 days ago",
          picture: XpertLogo.src,
          comment:
            "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete",
        },
        {
          contributor: "Mr Money",
          date: "4 days ago",
          picture: XpertLogo.src,
          comment:
            "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete",
        },
        {
          contributor: "Mr Money",
          date: "6 days ago",
          picture: XpertLogo.src,
          comment:
            "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete",
        },
      ],
    },
  ];

  return (
    <Container>
      <section>
        {BLOGS.map((item, idx) => (
          <section className="mb-12" key={idx}>
            <article className="flex items-center mb-8 gap-5">
              <img src={item.picture} alt="" className="w-20" />
              <div className="flex gap-2 flex-col">
                <h3 className="text-light-internationalOrange text-[1.25rem] font-bold leading-7">
                  {item.author}
                </h3>
                <p className="flex text-light-darkSilver leading-6 font-normal text-[1.18rem]">
                  {item.date_published} &nbsp; &#8226; {item.read_time}
                </p>
              </div>
            </article>
            <section className="grid gap-16 grid-cols-[1fr_300px]">
              <article className="leading-8 text-justify text-[1.125rem] text-light-completeBlack font-normal">
                {item.blog_text}
              </article>
              <aside>
                <h3 className="leading-7 mb-10 text-[1.75rem] text-bold-japaneseIndigo font-bold">
                  Comments
                </h3>
                <div className="flex flex-col gap-12">
                  <article className="flex gap-4 flex-col">
                    {item.comments.map((el, id) => (
                      <Fragment key={id}>
                        <div className="flex gap-4 justify-start items-center">
                          <img
                            src={el.picture}
                            alt=""
                            className="w-16 shadow-md border rounded-full"
                          />
                          <p className="text-bold-blackOlive flex justify-start flex-col">
                            <span className="text-[1rem] font-bold">
                              {el.contributor}
                            </span>{" "}
                            
                            <span className="leading-4 text-[0.625rem] font-normal text-bold-blackOlive">
                              {el.date}
                            </span>
                          </p>
                        </div>
                        <div>{el.comment}</div>
                      </Fragment>
                    ))}
                    <button
                      className="flex gap-3 justify-center text-white p-3 rounded-md items-center"
                      style={{
                        background:
                          "linear-gradient(168.79deg, #E1261C 28.64%, #8A0B04 136.7%)",
                      }}
                    >
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="#FFF"
                      >
                        <path
                          stroke="red"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 8.5v6"
                        ></path>
                        <path
                          stroke="red"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M9 12.5l3 3 3-3"
                        ></path>
                      </svg>
                    </button>
                  </article>

                  <h2 className="text-bold-japaneseIndigo font-extrabold">
                    Comment
                  </h2>
                  <form>
                    <input
                      type="text"
                      className="bg-[#F9FAFB] align-start p-3 w-full placeholder:text-[#C9C8C6] rounded-md border border-[#DEDDDC]"
                      placeholder="Full Name"
                      required
                    />
                    <br />
                    <textarea
                      name=""
                      id=""
                      placeholder="Enter comment"
                      className="bg-[#F9FAFB] resize-none align-start p-3 w-full placeholder:text-[#C9C8C6] rounded-md mt-4 border border-[#DEDDDC]"
                      cols={30}
                      rows={10}
                      required
                    
                    ></textarea>
                    <button
                      type="submit"
                      className="flex gap-3 mt-6 justify-center text-white p-3 w-full rounded-md items-center"
                      style={{
                        background:
                          "linear-gradient(168.79deg, #E1261C 28.64%, #8A0B04 136.7%)",
                      }}
                    >
                      Comment
                    </button>
                  </form>
                </div>
              </aside>
            </section>
          </section>
        ))}
      </section>
    </Container>
  );
}
