import ErrorPageLogo from "../src/assets/80698-404-error.gif";
import Link from "next/link";

function PageNotFound() {
  return (
    <div className="grid place-items-center">
      <img src={ErrorPageLogo.src} alt="" />
      <Link href="/">
        <button className="border border-light-internationalOrange bg-white leading-6 font-bold p-2 text-light-internationalOrange rounded-md px-4 hover:bg-light-internationalOrange hover:text-white">
          Go to Home
        </button>
      </Link>
    </div>
  );
}

export default PageNotFound;
