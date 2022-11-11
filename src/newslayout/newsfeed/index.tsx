import { Fragment } from "react";
import Container from "../../components/Container";
import GloriaTelentManagement from "./assets/tmgloria.png";

export default function NewsPost() {
  const NEWS = [
    {
      id: 1,
      author: "Gloria Eromonsele",
      date_published: "a week ago",
      read_time: "4 min",
      picture: GloriaTelentManagement.src,
      news_text:
        "AFEX, Nigeria's leading commodities market player, on Monday, rang the bell for financial literacy to flag off the sixth edition of World Investor Week 2022, in collaboration with the Securities and Exchange Commission (SEC) and Financial Literacy Technical Committee (FLTC) at a ring the bell ceremony held at the Exchange office in Lagos State. The ring-the-bell ceremony flags off a week-long event themed “Investor Resilience and Sustainable Finance”, which is aimed at driving awareness about the importance of investor education and protection, while also promoting financial literacy and inclusion that can engender shared prosperity in the commodities market. As a commodities exchange, AFEX has invested in financial education initiatives to enhance financial literacy among investors and improve participation for retail and institutional investors in the commodities market. Over a span of eight years, the Exchange has executed a number of robust education campaigns to deepen the financial market knowledge and confidence of investors through digitally distributed learning materials, data-driven market reports, webinars, and outreach programs, which have driven up active participation in the commodities market. “AFEX is pleased to once again ring the bell to advocate for financial literacy on the commodities market in Africa. Financial literacy and investor protection are important tenets that drive growth and inclusivity in the financial market, and as part of our efforts to promote sustainability in the ecosystem, we have developed a wholistic engagement framework that empowers retail and institutional investors to take advantage of the opportunities in the commodities market within the current market environment. Currently, we are gearing up to launch a four-part comic book designed to educate new and existing investors of all ages on how the commodities market works and how they can grow their wealth by leveraging alternative assest classes. As a participation grows, it is improtant to simplify financial management and investment so that no one is left behind in the commodities ecoysystem, stated, Oluwafunto Olasemo, Vice President, Financial Markets, at AFEX. To bridge knowledge gaps, initiatives like knowledge-sharing sessions, video tutorials, one-on-one sessions with financial experts, and detailed reports on commodity value chains are being incorporated into AFEX's technology platforms, allowing access to important trading data, trends, and financial information, thereby bringing support and growth to the commodities market. According to Fiona Ahime, MD, FBN Quest, “Investors should embrace diversification of investment”. Charles Egbunonwo, the MD of Forthright Securities, and a member of the Financial Literacy Committee also commented that “It is important to create awareness on financial literacy to unlock the potentials in the commodities space. If we are looking to diversify our economy, commodities are one of the key products to consider and develop. I am happy we are putting hands together to propagate the investment culture in the commodities market. Achieving investor resilience and sustainable finance requires a broad-based effort on the part of all capital market players to provide investors with the tools and knowledge required to make informed investment decisions. Addressing these core areas lays a foundation for market intergrity that will enable a thriving commodities market and shared prosperity for everyone involved.",
    },
  ];
  return (
    <Container>
      <section>
        {NEWS.map((item, idx) => (
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
            <article className="leading-8 text-justify text-[1.125rem] text-light-completeBlack font-normal">
              {item.news_text}
            </article>
          </section>
        ))}
      </section>
    </Container>
  );
}
