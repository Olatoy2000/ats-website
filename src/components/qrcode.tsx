import React, { useEffect, useState } from "react";
import Link from "next/link";
import { QRCodeCanvas } from "qrcode.react";
import { Modal } from "@mantine/core";
import axios from "axios";

function QrCodeScan(_props: any) {
  const [qrcode, setQrcode] = useState<any>(null);

  const fetchQrCode = async () => {
      let config = {
        method: "POST",
        headers: {
           "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "lokon@afexnigeria.com",
          date_time: "2022-11-20 19:12:03.090852",
          location: "ibadan",
        }),
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/tech-stars/QR-code-generator/`,
      }
       
      axios(config)
      .then((response) => setQrcode(JSON.stringify(response.data.data))).catch(console.log);
    };

    useEffect(() => {
    fetchQrCode();
  }, []);
    
      // "http://atsbk.afexats.com/api/v1/tech-stars/QR-code-generator/",
      // {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     email: "lokon@afexnigeria.com",
      //     date_time: "2022-11-20 19:12:03.090852",
      //     location: "ibadan",
      //   }),
      // }
    
      // .then((response) => response.json())
      // .then((data) => {
      //   setQrcode(JSON.stringify(data.data));
      // });

  return (
    <Modal
      classNames={{
        inner: "rounded-none",
        header: "hidden",
        modal: "p-0",
        body: "pr-0",
      }}
      styles={{
        modal: {
          marginTop: "auto",
          marginBottom: "auto",
          borderRadius: "20px",
        },
        body: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingBlock: "20px",
        },
      }}
      opened={_props.opened}
      onClose={() => _props.setOpened(false)}
    >
      <article className="w-fit box-border h-max p-6 bg-white items-center flex flex-col gap-2 justify-center rounded-xl">
        <div className="flex w-fit items-center justify-center flex-col">
          <p className="font-bold text-[clamp(0.75rem,1.125vw,1.125rem)] justify-self-center leading-6">
            Scan Barcode to take attendance
          </p>
          <p className="text-[clamp(0.56rem,0.75vw,0.75rem)] leading-4 font-normal">
            Use your ATS Scanner App to scan the barcode
          </p>
        </div>
        <div className="w-fit">
          {qrcode ? (
            <QRCodeCanvas
              id="qrCode"
              value={qrcode}
              size={300}
              bgColor={"#FFF"}
              level="H"
            />
          ) : null}
        </div>
      </article>
      <Link href="atslogin">
        <button
          onClick={_props.onClicks}
          className="border justify-self-center border-light-internationalOrange bg-white leading-6 font-bold px-12 text-light-internationalOrange rounded-md py-4 hover:bg-light-internationalOrange hover:text-white"
        >
          Dismiss
        </button>
      </Link>
    </Modal>
  );
}
export default QrCodeScan;
