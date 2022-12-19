import { Icon } from "@iconify/react";
import LoginBakground from "./assets/atslogin.png";
import Link from "next/link";
import QrCodeScanner from "./assets/qr code.png";
import { useState, useEffect } from "react";
import { useForm } from "@mantine/form";
import { TextInput } from "@mantine/core";
import QrCodeScan from "../../src/components/qrcode";
import Loading from "../../src/components/loading";
import axios from "axios";
import CryptoJS from "crypto-js";

var key = CryptoJS.enc.Utf8.parse("bQeThWmZq4t7w9z$C&F)J@NcRfUjXn2r");
var iv = CryptoJS.enc.Utf8.parse("s6v9y$B&E)H@McQf");
const encrypt = (element: any) => {
  return CryptoJS.AES.encrypt(
    (element),
    key,
    {
      iv: iv,
    }
  ).toString()
}


function index() {
  const form = useForm({
    initialValues: {
      email: "",
    },
  });

  // const [pass, setPass] = useState("");
  // const [value, setValue] = useState('')
  const [time, setTime] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");
  const [qrcode, setQrcode] = useState<any>(null);

  useEffect(() => {
    const date = new Date();
    setTime(date.getHours());
  }, [time]);

  useEffect(() => {
    if (form.values.email === "") setErr("");
  }, [form.values]);

  const sendData = (lat: string, long: string) => {

    let email = form.values.email;
    console.log(encrypt(email))

    if (/^\S+@\S+$/.test(email)) {
      var data = {
        email: encrypt(email),
        latitude: encrypt(lat),
        longitude: encrypt(long),
        date_time: encrypt(new Date().toISOString()),
      };

      console.log(data)



      var config = {
        method: "post",
        url: process.env.NEXT_PUBLIC_BASE_URL + `/api/v1/tech-stars/QR-code-generator/`,
        headers: {
          "API-KEY": process.env.NEXT_PUBLIC_API_KEY,
          "hash-key": process.env.NEXT_PUBLIC_HASH_KEY,
          "request-ts": "1669397556",
          "Content-Type": "application/json",
        },
        data: data,
      };

      console.log(config)

      axios(config)
        .then(function (response) {
          if (response.data.status_code === 201) {
            setQrcode(CryptoJS.AES.decrypt(response.data.data.image_base64, key, { iv: iv }).toString(CryptoJS.enc.Utf8));
            setIsLoading(false);
            setShowModal(true);
          }
        })
        .catch(function (error) {
          setErr("Email does not exist");
          setIsLoading(false);
        });
    }
    else {
      setErr("Invalid Email");
    }
  }

  const setModalTrue = () => {
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let userLocation = ''
        const lat = String(position.coords.latitude);
        const long = String(position.coords.longitude);
        fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.city) userLocation = data.city;
            else userLocation = data.locality;
            sendData(lat, long)
          })
          .catch((error) => {
            console.log(error)
            alert("Could not fetch location, please try again")
          }
          );
      },
      () => {
        ("errrrrooorrr");
        alert("please accept location permission");
        setIsLoading(false);

      }
    );
  };


  return (
    <div className="relative">
      {showModal && qrcode ? (
        <div className="z-10 absolute top-0 left-0 right-0 bottom-0">
          <QrCodeScan
            qrcode={qrcode}
            showModal={showModal}
            setShowModal={setShowModal}

          />
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
              <div className="flex-1">
                <TextInput
                  className="md:w-full sm:w-full"
                  classNames={{
                    label: "hidden",
                    input: "self-middle",
                  }}
                  styles={{ input: { paddingBlock: "26px", border: "none" } }}
                  withAsterisk
                  label="Email"

                  value={{}}
                  placeholder="Enter your working email address"
                  {...form.getInputProps("email")}
                />
                {err ? (
                  <p className="text-light-internationalOrange text-xs">
                    {err}
                  </p>
                ) : null}
              </div>
              <button
                type="submit"
                onClick={setModalTrue}
                disabled={time >= 8 && time <= 16 ? false : true}
                className={
                  time >= 8 && time <= 16
                    ? "text-white w-full sm:w-fit px-10 py-4 rounded-md leading-6 font-bold text-[1rem]"
                    : "opacity-20 text-[white] w-full sm:w-fit px-10 py-4 rounded-md leading-6 font-bold text-[1rem]"
                }
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
                    className={`${time >= 8 && time <= 16
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
                <p
                  className={`${time >= 8 && time <= 16
                    ? "text-light-metallicGreen text-[0.75rem] leading-4 whitespace-nowrap font-normal"
                    : "text-light-internationalOrange text-[0.75rem] leading-4 whitespace-nowrap font-normal"
                    }`}
                >
                  {time >= 8 && time < 16 ? "opens at 8am" : "closes at 5pm"}
                </p>
              </div>
            </div>
            <Link href="https://admin-ats.netlify.app/login">
              <button
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
        <section className="flex pl-4 md:gap-6 flex-col md:flex-row gap-4 items-center qr-code justify-center">
          <div className="flex items-center flex-col gap-4">
            <h5 className="font-bold font-inherit leading-6">
              How to scan QR code:
            </h5>
            <dl className="list items">
              <li>Login with your email</li>
              <li>System generates QR code</li>
              <li>Open the ATS scanner mobile app</li>
              <li>Scan QR code to submit your attendance</li>
            </dl>
          </div>
          <img src={QrCodeScanner.src} alt="qr code image" className="w-40" />
        </section>
      </div>
      <Loading loading={isLoading} />
    </div>
  );
}

export default index;
