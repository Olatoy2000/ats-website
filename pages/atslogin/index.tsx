import { Icon } from "@iconify/react";
import LoginBakground from "./assets/atslogin.png";
import Link from "next/link";
import QrCodeScanner from "./assets/qr code.png";
import { useRef, useState, useEffect } from "react";
import { useForm } from "@mantine/form";
import { TextInput } from "@mantine/core";
import QrCodeScan from "../../src/components/qrcode";
import Loading from "../../src/components/loading";

function index() {
  const form = useForm({
    initialValues: {
      email: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  // const [pass, setPass] = useState("");
  const [time, setTime] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const date = new Date();
    setTime(date.getHours());

    console.log(time);
  }, [time]);

  const setModalTrue = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    setShowModal(true);
  };

  const setModalFalse = () => {
    setShowModal(false);
  };
  return (
    <div className="relative">
      {isLoading === true ? (
        <Loading />
      ) : showModal ? (
        <div className="z-10 absolute top-0 left-0 right-0 bottom-0">
          <QrCodeScan onClicks={setModalFalse} />
        </div>
      ) : (
        <div></div> 
      )}
      <div
        style={{
          backgroundImage: `url(${LoginBakground.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          paddingBlock: "80px",
          zIndex: 1,
        }}
      >
        <section className="grid mb-16 md:grid-cols-[3fr_1fr] w-5/6 max-w-screen-2xl mx-auto gap-4">
          <article className="flex z-1 flex-col bg-[#1B1B1B] px-6 py-8">
            <h1 className="text-white font-bold text-[2rem] leading-10 pb-5">
              ATS Login
            </h1>
            <form
              className="sm:flex bg-white justify-between py-2 px-3"
              onSubmit={form.onSubmit((values: any) => console.log(values))}
            >
              <TextInput
                className="md:w-full sm:w-full"
                classNames={{
                  label: "hidden",
                  input: "self-middle",
                }}
                styles={{ input: { paddingBlock: "26px", border: "none" } }}
                withAsterisk
                label="Email"
                placeholder="Enter your working email address"
                {...form.getInputProps("email")}
              />
              <button
                type="submit"
                onClick={setModalTrue}
                disabled={time >= 8 && time <= 16 ? false : true}
                className="text-white w-full sm:w-fit px-10 py-4 rounded-md leading-6 font-bold text-[1rem]"
                style={{
                  background:
                    "linear-gradient(168.79deg, #E1261C 28.64%, #8A0B04 136.7%)",
                }}
              >
                Login
              </button>
            </form>
          </article>
          <article className="flex z-1 flex-col gap-3 justify-start">
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
                      time >= 8 && time <= 16
                        ? "text-light-metallicGreen text-[0.75rem] leading-4 whitespace-nowrap font-normal"
                        : "text-light-internationalOrange text-[0.75rem] leading-4 whitespace-nowrap font-normal"
                    }`}
                  >
                    <Icon
                      icon="ci:dot-01-xs"
                      color={time >= 8 && time <= 16 ? `#498e00` : "#C81107"}
                      width="40"
                      height="40"
                      className="inline"
                    />
                    {time >= 8 && time <= 16 ? "opened now" : "closed now"}
                  </span>
                </div>
                <p className="text-[#54565B] leading-4 text-[0.75rem]">
                  Opens at 8am
                </p>
              </div>
            </div>
            <Link href="/adminlogin">
              <button
                // <button onClick={() => loginWithRedirect()}>
                type="submit"
                style={{
                  background:
                    "linear-gradient(168.79deg, #E1261C 28.64%, #8A0B04 136.7%)",
                }}
                className="leading-24 font-bold w-full text-center p-4 text-white"
              >
                Login as Admin
              </button>
            </Link>
          </article>
        </section>
        <section className="flex md:gap-6 flex-col md:flex-row gap-4 items-center qr-code justify-center">
          <div className="flex flex-col gap-4">
            <h5 className="font-bold font-inherit leading-6">
              How to scan QR code:
            </h5>
            <dl className="list">
              <li>Login with your email</li>
              <li>System generates QR code</li>
              <li>Open the ATS scanner mobile app</li>
              <li>Scan QR code to submit your attendance</li>
            </dl>
          </div>
          <img src={QrCodeScanner.src} alt="qr code image" className="w-40" />
        </section>
      </div>
      {/* )} */}
    </div>
  );
}

export default index;
