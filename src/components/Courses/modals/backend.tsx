import { Icon } from "@iconify/react";
import { Fragment } from "react";
import { Divider } from "@mantine/core";
import { Whatsapp, Link } from "iconsax-react";
import BackEndBack from "../modals/assets/backendback.png";
import moment from "moment";
import setupfour from "./setupfour.json";
import useClipboard from "react-use-clipboard";
import { Popover, Text, Button } from "@mantine/core";
import {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  EmailShareButton,
  LinkedinShareButton,
} from "react-share";
import { url } from "inspector";

function BackEnd() {
  const [isCopied, setCopied] = useClipboard(
    "https://afex.ats.com/apply/frontend/56473888263783/enquiries?source=careersite"
  );
  return (
    <Fragment>
      <article
        className="flex flex-col items-center py-6 gap-6"
        style={{
          backgroundImage: `url(${BackEndBack.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <section className="flex flex-col items-center gap-1">
          <h1 className="font-extrabold text-[clamp(1rem,4vw,4.5rem)] leading-[4.75rem] text-semiBold-gostWhite">
            {setupfour.data.title}
          </h1>
          <div className="flex items-center gap-1">
            <Icon
              icon="ci:dot-02-s"
              color={
                +moment(setupfour.data.job.application_end_date).format("x") -
                  +moment().format("x") >
                0
                  ? "#00ff38"
                  : "#C81107"
              }
              width="35"
              height="35"
            />
            <p
              className={
                "text-[1.125rem] leading-6 " +
                (+moment(setupfour.data.job.application_end_date).format("x") -
                  +moment().format("x") >
                0
                  ? "text-bold-malachite font-bold"
                  : "text-light-internationalOrange font-bold")
              }
            >
              {+moment(setupfour.data.job.application_end_date).format("x") -
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
<<<<<<< Updated upstream
            <EmailShareButton
              url={
                "https://afex.ats.com/apply/frontend/56473888263783/enquiries?source=careersite"
              }
            >
              <button className="border-white text-white hover:bg-[#C81107] border rounded-md p-3">
                Refer a friend
              </button>
            </EmailShareButton>
=======
            <button className="border-white text-white hover:bg-[#C81107] border rounded-md p-3">
              Refer a friend
            </button>
>>>>>>> Stashed changes
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
              width="12"
              height="12"
            />
            <FacebookShareButton
              url={
                "https://afex.ats.com/apply/frontend/56473888263783/enquiries?source=careersite"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#fff"
              >
                <path
                  fill="#FFF"
                  d="M22 16.19c0 3.64-2.17 5.81-5.81 5.81H15c-.55 0-1-.45-1-1v-5.77c0-.27.22-.5.49-.5l1.76-.03c.14-.01.26-.11.29-.25l.35-1.91a.303.303 0 00-.3-.35l-2.13.03c-.28 0-.5-.22-.51-.49l-.04-2.45c0-.16.13-.3.3-.3l2.4-.04c.17 0 .3-.13.3-.3l-.04-2.4c0-.17-.13-.3-.3-.3l-2.7.04a2.996 2.996 0 00-2.95 3.05l.05 2.75c.01.28-.21.5-.49.51l-1.2.02c-.17 0-.3.13-.3.3l.03 1.9c0 .17.13.3.3.3l1.2-.02c.28 0 .5.22.51.49l.09 5.7c.01.56-.44 1.02-1 1.02h-2.3C4.17 22 2 19.83 2 16.18V7.81C2 4.17 4.17 2 7.81 2h8.38C19.83 2 22 4.17 22 7.81v8.38z"
                ></path>
              </svg>
            </FacebookShareButton>
            <WhatsappShareButton
              url={
                "https://afex.ats.com/apply/frontend/56473888263783/enquiries?source=careersite"
              }
            >
              <Whatsapp size="24" color="#ffffff" variant="Bold" />
            </WhatsappShareButton>
            <TelegramShareButton
              url={
                "https://afex.ats.com/apply/frontend/56473888263783/enquiries?source=careersite"
              }
              children={undefined}
            ></TelegramShareButton>
            <LinkedinShareButton
              url={
                "https://afex.ats.com/apply/frontend/56473888263783/enquiries?source=careersite"
              }
            >
              <Icon
                icon="ri:linkedin-fill"
                color="white"
                width="24"
                height="24"
              />
            </LinkedinShareButton>

            <TwitterShareButton
              url={
                "https://afex.ats.com/apply/frontend/56473888263783/enquiries?source=careersite"
              }
            >
              <Icon
                icon="bytesize:twitter"
                color="white"
                width="24"
                height="24"
              />
            </TwitterShareButton>

            {isCopied ? (
              <Popover width={150} position="bottom" withArrow shadow="md">
                <Popover.Target>
                  <Link
                    onClick={() => setCopied()}
                    size="24"
                    color="#fff"
                    variant="Bold"
                    className="cursor-pointer"
                  />
                </Popover.Target>
                <Popover.Dropdown
                  sx={{ textAlign: "center", cursor: "pointer" }}
                >
                  <Text size="sm">Link copied</Text>
                </Popover.Dropdown>
              </Popover>
            ) : (
              <Link
                onClick={() => setCopied()}
                size="24"
                color="#fff"
                variant="Bold"
              />
            )}
          </div>
        </section>
      </article>
      <article className="flex flex-col gap-6 p-10">
        <div className="flex flex-col gap-1">
          <h3 className="text-light-quickSilver uppercase">course detail</h3>
          <Divider />
        </div>
        <p className="text-justify">{setupfour.data.description}</p>
        <div className="flex flex-col gap-1">
          <h3 className="text-light-quickSilver uppercase">active cohort</h3>
          <Divider />
        </div>
        <div>
          <div className="flex flex-col gap-4 justify-start mb-6">
            <h5 className="font-bold">
              Cohort:{" "}
              <span className="font-light">
                {setupfour.data.active_cohort.name}
              </span>
            </h5>
            <h5 className="font-bold">
              Starting Date:{" "}
              <span className="font-light">
                {moment(setupfour.data.active_cohort.start_date).format("LL")}
              </span>
            </h5>
            <h5 className="font-bold">
              Ending Date:
              <span className="font-normal">
                {moment(setupfour.data.active_cohort.end_date).format("LL")}
              </span>
            </h5>
          </div>
        </div>

        <h3 className="uppercase text-light-darkSilver">open application</h3>
        <Divider />
        <div>
          <div className="flex flex-col gap-4 justify-start mb-6">
            <h5>
              Cohort: <span>{setupfour.data.job.cohort}</span>
            </h5>
            <h5>
              Starting Date:{" "}
              <span>{moment(setupfour.data.job.start_date).format("LL")}</span>
            </h5>
            <h5>
              Ending Date:{" "}
              <span>{moment(setupfour.data.job.end_date).format("LL")}</span>
            </h5>
            <h5 className="font-bold">
              Application Starting Date:{" "}
              <span className="text-bold-malachite font-bold">
                {moment(setupfour.data.job.application_start_date).format("LL")}
              </span>
            </h5>
            <h5 className="font-bold">
              Application Ending Date:{" "}
              <span className="text-light-internationalOrange font-bold">
                {moment(setupfour.data.job.application_end_date).format("LL")}
              </span>
            </h5>
          </div>
        </div>
        <div>
          <h4 className="uppercase font-bold">Requirement</h4>
          <p>{setupfour.data.job.requirement}</p>
        </div>
<<<<<<< Updated upstream
        <a href={setupfour.data.job.apply_link}></a>
=======
>>>>>>> Stashed changes
        <button
          id="app"
          className="self-center bg-light-internationalOrange w-full rounded-md text-white px-16 py-3"
        >
          Apply now
        </button>
      </article>
    </Fragment>
  );
}
export default BackEnd;
