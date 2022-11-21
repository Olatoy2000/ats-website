import React, { useEffect, useState } from "react";
import Link from "next/link";


function QrCodeScan(props: any) {
  const [qrcode, setQrcode] = useState<any>(null);

  const fetchQrCode = async () => {
    const qrCode = await fetch(
      "http://atsbk.afexats.com/api/v1/tech-stars/QR-code-generator/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "lokon@afexnigeria.com",
          date_time: "2022-11-20 19:12:03.090852",
          location: "ibadan",
        }),
      }
    ).then((response) => {
      response.json().then((responses) => {
        setQrcode(responses.data.image_base64);
      });
    });
  };
  useEffect(() => {
    fetchQrCode();
    console.log(qrcode);
  }, []);

  return (
    <section
      className="flex flex-col gap-8 justify-center w-5/6 mx-auto items-center max-w-screen-2xl h-full"
      style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
    >
      <article className="w-max h-max p-12 bg-white items-center flex flex-col justify-center rounded-xl">
        <div className="flex flex-col">
          <p className="font-bold text-[clamp(0.75rem,1.125vw,1.125rem)] justify-self-center leading-6">
            Scan Barcode to take attendance
          </p>
          <p className="text-[0.75rem] leading-4 font-normal">
            Use your ATS Scanner App to scan the barcode
          </p>
        </div>
        <div className="w-[18.75rem]">
          {qrcode ? <img src={"data:image/png;base64," + qrcode} /> : null}
        </div>
      </article>
      <Link href="atslogin">
        <button
          onClick={props.onClicks}
          className="border border-light-internationalOrange bg-white leading-6 font-bold px-12 text-light-internationalOrange rounded-md py-4 hover:bg-light-internationalOrange hover:text-white"
        >
          Dismiss
        </button>
      </Link>
    </section>
  );
}
export default QrCodeScan;
