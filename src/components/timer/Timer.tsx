import React from "react";
import { useTimer } from "react-timer-hook";
import setuptime from "./setuptime.json";

interface ICountDown {
  expiryTimestamp: Date;
}

function MyTimer({ expiryTimestamp }: ICountDown) {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
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
            paddingInline: "10px",
            borderRadius: "20px",
            borderImageSlice: 1,
            borderImageSource:
              "linear-gradient(160.86deg, rgba(255, 255, 255, 0.87) 2.3%, rgba(255, 159, 159, 0.4) 30.65%, rgba(255, 33, 33, 0.21) 73.2%, rgba(241, 210, 210, 0.58) 89.78%) borderBox",
          }}
          className="timer box flex gap-6 timer-gradient md:py-20 py-10"
        >
          <div className="flex flex-col">
            <span className="font-['Jura'] font-bold md:text-[50px] text-[18px] md:leading-[50px] leading-6 bg-black py-2 px-4 rounded-lg">
              {days}
            </span>
            <span className=" text-[12px] text-[black]">DAYS</span>
          </div>
          <div className="flex  flex-col">
            <span className="font-['Jura'] font-bold md:text-[50px] text-[18px] md:leading-[50px] leading-6 bg-black py-2 px-4 rounded-lg">
              {hours < 10 ? `0${hours}` : hours}
            </span>
            <span className="text-[12px] text-[black]">HOURS</span>
          </div>
          <div className="flex flex-col">
            <span className="font-['Jura'] font-bold md:text-[50px] text-[18px] md:leading-[50px] leading-6 bg-black py-2 px-4 rounded-lg">
              {minutes < 10 ? `0${minutes}` : minutes}
            </span>
            <span className="text-[12px] text-[black]">MINUTES</span>
          </div>
          <div className="flex flex-col">
            <span className="font-['Jura'] font-bold md:text-[50px] text-[18px] md:leading-[50px] leading-6 bg-black py-2 px-4 rounded-lg">
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
  const time = new Date(setuptime.data[0].end_date);
  time.setSeconds(time.getSeconds()); // 30 minutes timer
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}
