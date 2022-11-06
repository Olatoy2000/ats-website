import React from "react";
import { useTimer } from "react-timer-hook";

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
      className="py-12"
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
      <h1 className="text-[3rem] leading-[3.5rem] font-bold">
        Registration Ends
      </h1>
      <div className="flex justify-center leading-6">
        <div
          style={{
            fontSize: "100px",
            border: "2px solid",
            borderRadius: "20px",
            borderImageSlice: 1,
            borderImageSource:
              "linear-gradient(160.86deg, rgba(255, 255, 255, 0.87) 2.3%, rgba(255, 159, 159, 0.4) 30.65%, rgba(255, 33, 33, 0.21) 73.2%, rgba(241, 210, 210, 0.58) 89.78%) borderBox",
          }}
          className="timer box w-max flex gap-8  timer-gradient py-20 p-[30px]"
        >
          <span className="timer bg-black py-2 px-4 rounded-lg">{days}</span>
          <span className="timer bg-black py-2 px-4 rounded-lg">{hours}</span>
          <span className="timer bg-black py-2 px-4 rounded-lg">{minutes}</span>
          <span className="timer bg-black py-2 px-4 rounded-lg">{seconds}</span>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 2600_000); // 30 minutes timer
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}
