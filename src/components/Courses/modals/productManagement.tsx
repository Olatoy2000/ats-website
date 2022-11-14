import { Icon } from "@iconify/react";
import { Divider } from "@mantine/core";
import { Fragment } from "react";
import { Whatsapp, Link } from "iconsax-react";
import ProductManagementBack from "./assets/pmback.png";
import setup from "./setup.json";
import moment from "moment";

function ProductManagement() {
  return (
    <Fragment>
      <article
        className="flex flex-col items-center gap-6"
        style={{
          backgroundImage: `url(${ProductManagementBack.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <section className="flex flex-col items-center gap-1">
          <h1 className="font-extrabold text-[clamp(1rem,4vw,4.5rem)] leading-[4.75rem] text-semiBold-gostWhite">
            {setup.data.title}
          </h1>
          <div className="flex items-center gap-1">
            <Icon
              icon="ci:dot-02-s"
              color={
                +moment(setup.data.job.application_end_date).format("x") -
                  +moment().format("x") >
                0
                  ? "#00ff38"
                  : "red"
              }
              width="35"
              height="35"
            />
            <p
              className={
                "text-[1.125rem] leading-6 " +
                (+moment(setup.data.job.application_end_date).format("x") -
                  +moment().format("x") >
                0
                  ? "text-bold-malachite"
                  : "text-light-internationalOrange")
              }
            >
              {+moment(setup.data.job.application_end_date).format("x") -
                +moment().format("x") >
              0
                ? "Open"
                : "Closed"}{" "}
              for Application
            </p>
          </div>
        </section>
        <section className="flex flex-col mb-8 items-center justify-center gap-4">
          <div className="flex gap-6">
            <button className="border-white text-white hover:bg-[#C81107] border rounded-md p-3">
              Refer a friend
            </button>
            <a href="#app">
              <button
                className="p-3 text-white rounded-md"
                style={{
                  background:
                    "linear-gradient(168.79deg, #E1261C 28.64%, #8A0B04 136.7%)",
                }}
              >
                Apply now
              </button>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Icon
              icon="material-symbols:share"
              color="white"
              width="32"
              height="32"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="#fff"
            >
              <path
                fill="#FFF"
                d="M22 16.19c0 3.64-2.17 5.81-5.81 5.81H15c-.55 0-1-.45-1-1v-5.77c0-.27.22-.5.49-.5l1.76-.03c.14-.01.26-.11.29-.25l.35-1.91a.303.303 0 00-.3-.35l-2.13.03c-.28 0-.5-.22-.51-.49l-.04-2.45c0-.16.13-.3.3-.3l2.4-.04c.17 0 .3-.13.3-.3l-.04-2.4c0-.17-.13-.3-.3-.3l-2.7.04a2.996 2.996 0 00-2.95 3.05l.05 2.75c.01.28-.21.5-.49.51l-1.2.02c-.17 0-.3.13-.3.3l.03 1.9c0 .17.13.3.3.3l1.2-.02c.28 0 .5.22.51.49l.09 5.7c.01.56-.44 1.02-1 1.02h-2.3C4.17 22 2 19.83 2 16.18V7.81C2 4.17 4.17 2 7.81 2h8.38C19.83 2 22 4.17 22 7.81v8.38z"
              ></path>
            </svg>
            <Whatsapp size="32" color="#ffffff" variant="Bold" />
            <Icon
              icon="carbon:logo-instagram"
              color="white"
              width="32"
              height="32"
            />
            <Icon
              icon="icon-park-solid:instagram-one"
              color="white"
              width="32"
              height="32"
            />

            <Icon
              icon="bytesize:twitter"
              color="white"
              width="32"
              height="32"
            />
            <Link size="32" color="#ffffff" variant="Bold" />
          </div>
        </section>
      </article>
      <article className="flex flex-col gap-6 p-10">
        <div className="flex flex-col gap-1">
          <h3 className="text-light-quickSilver uppercase">course detail</h3>
          <Divider />
        </div>
        <p className="text-justify">{setup.data.description}</p>
        <div className="flex flex-col gap-1">
          <h3 className="text-light-quickSilver uppercase">active cohort</h3>
          <Divider />
        </div>
        <div>
          <div className="flex flex-col gap-4 justify-start mb-6">
            <h5 className="font-bold">
              Cohort:{" "}
              <span className="font-light">
                {setup.data.active_cohort.name}
              </span>
            </h5>
            <h5 className="font-bold">
              Starting Date:{" "}
              <span className="font-light">
                {moment(setup.data.active_cohort.start_date).format("LL")}
              </span>
            </h5>
            <h5 className="font-bold">
              Ending Date:
              <span className="font-normal">
                {moment(setup.data.active_cohort.end_date).format("LL")}
              </span>
            </h5>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="uppercase text-light-darkSilver">open application</h3>
          <Divider />
        </div>
        <div>
          <div className="flex flex-col gap-4 justify-start mb-6">
            <h5 className="font-bold">
              Cohort:{" "}
              <span className="font-normal">{setup.data.job.cohort}</span>
            </h5>
            <h5 className="font-bold">
              Starting Date:{" "}
              <span className="font-normal">
                {moment(setup.data.job.start_date).format("LL")}
              </span>
            </h5>
            <h5 className="font-bold">
              Ending Date:{" "}
              <span className="font-normal">
                {moment(setup.data.job.end_date).format("LL")}
              </span>
            </h5>
            <h5 className="font-bold">
              Application Starting Date:
              <span className="text-light-malachite">
                {moment(setup.data.job.application_start_date).format("LL")}
              </span>
            </h5>
            <h5 className="font-bold">
              Application Ending Date:{" "}
              <span className="font-normal text-">
                {moment(setup.data.job.application_end_date).format("LL")}
              </span>
            </h5>
          </div>
        </div>
        <div>
          <h4 className="uppercase font-bold">Requirement</h4>
          <p>{setup.data.job.requirement}</p>
        </div>
        {/* <div>
          <h4 className="uppercase font-bold">how to apply</h4>
          <p>
            Click "Apply now" Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Quisquam, culpa non sunt, nisi quos ipsum totam
            magnam excepturi voluptate voluptatem nesciunt distinctio
            praesentium explicabo sit animi eum, autem rem velit. Dignissimos,
            aliquid. Provident aspernatur distinctio modi autem, necessitatibus
            repellat in ullam, deserunt exercitationem dolores est delectus.
            Enim in nam hic, dolorum fugiat, perspiciatis distinctio eaque ea
            sunt molestiae iure quam.
          </p>
        </div> */}
        <a href={setup.data.job.apply_link}>
          <button
            id="app"
            className="self-center bg-light-internationalOrange w-full rounded-md text-white px-16 py-3"
          >
            Apply now
          </button>
        </a>
      </article>
    </Fragment>
  );
}

export default ProductManagement;
