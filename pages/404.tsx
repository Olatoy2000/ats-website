import ErrorMessage from "../src/assets/confirmerrormessage.png";
import Link from "next/link";

function PageNotFound() {
  return (
    <div
      className="flex flex-col justify-end items-center bg-no-repeat h-screen"
      style={{
        backgroundImage: `url(${ErrorMessage.src})`,
        backgroundSize: "100% 100%",
      }}
    >
      <Link href="/">
        <button className="border border-light-internationalOrange bg-white leading-6 font-bold p-2 text-light-internationalOrange rounded-md px-4 hover:bg-light-internationalOrange hover:text-white">
          Go to Home
        </button>
      </Link>
    </div>
  );
}

export default PageNotFound;
