import ErrorMessage from "../src/assets/confirmerrormessage.png";
import Link from "next/link";
import RealErrorMessage from "../src/assets/realerrorpage.png";

function PageNotFound() {
  return (
    <div
      className="flex flex-col px-[3rem] justify-end gap-40 items-center bg-no-repeat h-screen"
      style={{
        backgroundImage: `url(${RealErrorMessage.src})`,
        backgroundSize: "100% 100%",
      }}
    >
      <h4 className="text-white text-[clamp(0.625rem,1.5vw,2rem)] font-bold font-['Mulish'] self-center">
        YOU ARE LOST, LET'S HELP YOU FIND YOUR WAY
      </h4>
      <Link href="/">
        <button className="border justify-self-end border-light-internationalOrange bg-white leading-6 font-bold p-2 text-light-internationalOrange rounded-md px-4 hover:bg-light-internationalOrange hover:text-white">
          Go to Home
        </button>
      </Link>
    </div>
  );
}

export default PageNotFound;
