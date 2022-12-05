import axios from "axios";
import sha256 from "crypto-js/sha256";
import { data } from "jquery";
import React, { useEffect, useState } from "react";
import { useTimer } from "react-timer-hook";
import CryptoJS from 'crypto-js';

interface ICountDown {
  time: Date;
}
function MyTimer({ time }: any) {
  const [applicationDate, setApplicationDate] = useState("")
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp: time,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div
      className="py-12 w-full"
      style={{
        textAlign: "center",
        color: "#F9FAFB",
        background: "#47494E",
        fontFamily: "mulish",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        marginBottom: "200px",
      }}
    >
      <h1 className="text-[clamp(0.75rem,2.5vw,3rem)] md:leading-[3.5rem] font-bold">
        Registration Ends
      </h1>
      <div className="flex justify-center sm:leading-6">
        <div
          style={{
            fontSize: "100px",
            border: "2px solid",
            borderRadius: "20px",
            borderImageSlice: 1,
            borderImageSource:
              "linear-gradient(160.86deg, rgba(255, 255, 255, 0.87) 2.3%, rgba(255, 159, 159, 0.4) 30.65%, rgba(255, 33, 33, 0.21) 73.2%, rgba(241, 210, 210, 0.58) 89.78%) borderBox",
          }}
          className="timer box flex lg:px-10 md:px-6 px-4 gap-6 timer-gradient md:py-20 py-10">
          <div className="flex flex-col p gap-4 w-fit">
            <span className="font-['Jura'] p-4 font-bold md:text-[50px] text-[18px] md:leading-[50px] leading-6 bg-black py-2 px-4 rounded-lg">
              {days}
            </span>
            <span className=" text-[12px] text-[black]">DAYS</span>
          </div>
          <div className="flex w-fit flex-col gap-4">
            <span className="font-['Jura'] p-4 font-bold md:text-[50px] text-[18px] md:leading-[50px] leading-6 bg-black py-2 px-4 rounded-lg">
              {hours < 10 ? `0${hours}` : hours}
            </span>
            <span className="text-[12px] text-[black]">HOURS</span>
          </div>
          <div className="flex w-fit flex-col gap-4">
            <span className="font-['Jura'] p-4 font-bold md:text-[50px] text-[18px] md:leading-[50px] leading-6 bg-black py-2 px-4 rounded-lg">
              {minutes < 10 ? `0${minutes}` : minutes}
            </span>
            <span className="text-[12px] text-[black]">MINUTES</span>
          </div>
          <div className="flex w-[85px] flex-col gap-4">
            <span className="font-['Jura'] p-4 font-bold md:text-[50px] text-[18px] md:leading-[50px] leading-6 bg-black py-2 px-4 rounded-lg">
              {seconds < 10 ? `0${seconds}` : seconds}
            </span>
            <span className="text-[12px] text-[black]">SECONDS</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [time, setTime] = useState<number | null>(null)
  const [gotten, setGotten] = useState(false)

  useEffect(() => {
    getTime()
  }, [])

  useEffect(() => {
    if (time) setGotten(true)
  }, [time])

  const getTime = () => {

    let requestTs = String(Date.now());
    var config = {
      method: 'get',
      url: `${process.env.NEXT_PUBLIC_BASE_URL_1}/api/jobs/latest-cohort`,
      headers: {
        "request-ts": requestTs,
        "api-key": process.env.NEXT_PUBLIC_APP_API_KEY_1,
        "hash-key": sha256(
          `${process.env.NEXT_PUBLIC_APP_API_KEY_1}` +
          `${process.env.NEXT_PUBLIC_APP_SECRET_KEY_1}` +
          requestTs).toString(),
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        let time = new Date(response.data.data[0].application_end_date);
        setTime(time.setSeconds(time.getSeconds()))
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      {gotten ? <MyTimer time={time} /> : null}
    </div>
  );
}
