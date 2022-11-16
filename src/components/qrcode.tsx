import React from "react";
import Link from "next/link";

function QrCodeScan(props: any) {
  return (
    <section
      className="flex flex-col gap-8 justify-center items-center max-w-screen-2xl h-full"
      style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
    >
      <article className="w-4/12 h-4/6 py-2 bg-white flex flex-col items-center justify-center rounded-xl">
        <div className="flex flex-col">
          <p className="font-bold text-[1.125rem] leading-6">
            Scan Barcode to take attendance
          </p>
          <p className="text-[0.75rem] self-center leading-4 font-normal">
            Use your ATS Scanner App to scan the barcode
          </p>
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
