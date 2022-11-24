import { Fragment, useState } from "react";
import Container from "../../components/Container";
import XpertLogo from "./assets/newxpert.png";

export default function CommentBlog({ blogDetail }: any) {
  const [paginate, setPaginate] = useState(5);

  return (
    <Container>
      <section>
        <section className="mb-12">
          <article className="flex items-center mb-8 gap-5">
            <img src={XpertLogo.src} alt="xpert logo" className="w-20" />
            <div className="flex gap-2 flex-col">
              <h3 className="text-light-internationalOrange text-[1.25rem] font-bold leading-7">
                {blogDetail.author_fullname}
              </h3>
              <p className="flex text-light-darkSilver leading-6 font-normal text-[1.18rem]">
                {blogDetail.created_at} &nbsp; &#8226; {blogDetail.min_read}
              </p>
            </div>
          </article>
          <section className="grid gap-16 grid-cols-[1fr_300px]">
            <article className="leading-8 text-justify text-[1.125rem] text-light-completeBlack font-normal">
              {blogDetail.description}
            </article>
            <aside>
              <h3 className="leading-7 mb-10 text-[1.75rem] text-bold-japaneseIndigo font-bold">
                Comments
              </h3>
              <div className="flex flex-col gap-12">
                <article className="flex gap-4 flex-col">
                  {blogDetail.few_comments.map((el: any, id: number) =>
                    id < paginate ? (
                      <Fragment key={id}>
                        <div className="flex gap-4 justify-start items-start">
                          <img
                            src={el.picture}
                            alt=""
                            className="w-20 shadow-md border rounded-full"
                          />
                          <p className="text-bold-blackOlive flex justify-start flex-col">
                            <span className="text-[1rem] leading-6 font-bold">
                              {el.contributor}
                            </span>{" "}
                            &nbsp;{" "}
                            <span className="leading-4 text-[0.625rem] font-normal text-bold-blackOlive">
                              {el.date}
                            </span>
                          </p>
                        </div>
                        <div>{el.comment}</div>
                      </Fragment>
                    ) : null
                  )}
                  {Array(4 - blogDetail.few_comments.length).fill(
                    <Fragment>
                      <div className="flex gap-6 items-center">
                        <img
                          src={XpertLogo.src}
                          alt=""
                          className="w-20 shadow-md border rounded-full"
                        />
                        <p className="text-bold-blackOlive flex flex-col">
                          <span className="block text-[1rem] font-bold">
                            ---------------
                          </span>{" "}
                          &nbsp;{" "}
                          <span className="text-[0.625rem] font-normal  text-bold-blackOlive">
                            ----------
                          </span>
                        </p>
                      </div>
                      <div className="break-words">
                        ...............................................................................................................................................................................................................................................................................................................................
                      </div>
                    </Fragment>
                  )}
                  <button
                    onClick={() => setPaginate(10)}
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
      </section>
    </Container>
  );
}
