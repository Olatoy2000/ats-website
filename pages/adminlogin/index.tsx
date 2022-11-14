import { Icon } from "@iconify/react";
import LoginBakground from "./assets/atslogin.png";
import Link from "next/link";
import { PasswordInput } from "@mantine/core";
import { useRef, useState, useEffect } from "react";

function index() {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const date = new Date();
    setTime(date.getHours());

    console.log(typeof time);
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${LoginBakground.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        paddingBlock: "80px",
      }}
    >
      <section className="grid md:grid-cols-[3fr_1fr] w-5/6 mx-auto md:gap-4 gap-8">
        <article className="flex flex-col bg-[#1B1B1B] p-8">
          <h1 className="text-white font-bold text-[2rem] leading-10 pb-5">
            Admin Login
          </h1>
          <section className="gap-8 grid md:grid-cols-2">
            <div className="flex gap-6 bg-white justify-between p-3">
              <input
                type="text"
                placeholder="Enter your username"
                className="w-full outline-none"
                required
              />
            </div>
            <div className=" sm:flex sm:items-center sm:bg-white  sm:px-3 sm:py-2">
              <PasswordInput
                placeholder="Enter your Password"
                className="text-semiBold-chineseSilver placeholder:leading-6 placeholder:text-semiBold-chineseSilver w-full"
                classNames={{
                  input:
                    "border-none rounded-none flex items-center py-6 font-['Mulish']",
                  rightSection: "p-3",
                  innerInput:
                    "placeholder:text-[1rem] pt-[10px] align-baseline font-['Mulish]",
                  root: "",
                }}
                withAsterisk
              />
              <button
                type="submit"
                className="text-white py-2 px-4 mt-4 w-full sm:w-max sm:mt-0 rounded-md leading-6 font-bold text-[1rem]"
                style={{
                  background:
                    "linear-gradient(168.79deg, #E1261C 28.64%, #8A0B04 136.7%)",
                }}
              >
                Login
              </button>
            </div>
          </section>
        </article>
        <article className="flex flex-col gap-3 justify-start">
          <div className="bg-[#E2E9EB] flex flex-col gap-4 justify-start p-4">
            <h1 className="text-light-eerieBlack self-start font-bold text-[2rem] leading-10">
              ATS Login
            </h1>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <p className="text-light-eerieBlack leading-6 whitespace-nowrap font-normal">
                  Login access
                </p>
                <span
                  className={`${
                    time >= 8 && time <= 17
                      ? "text-light-metallicGreen text-[0.75rem] leading-4 whitespace-nowrap font-normal"
                      : "text-light-internationalOrange text-[0.75rem] leading-4 whitespace-nowrap font-normal"
                  }`}
                >
                  <Icon
                    icon="ci:dot-01-xs"
                    color={time >= 8 && time <= 17 ? `#498e00` : "#C81107"}
                    width="40"
                    height="40"
                    className="inline"
                  />
                  {time >= 8 && time <= 17 ? "opened now" : "closed now"}
                </span>
              </div>
              <p className="text-[#54565B] leading-4 text-[0.75rem]">
                Opens at 8am
              </p>
            </div>
          </div>
          <Link href="/atslogin">
            <button
              type="submit"
              style={{
                background:
                  "linear-gradient(168.79deg, #E1261C 28.64%, #8A0B04 136.7%)",
              }}
              className="leading-24 font-bold w-full text-center p-4 text-white"
            >
              Login as ATS
            </button>
          </Link>
        </article>
      </section>
    </div>
  );
}

export default index;
