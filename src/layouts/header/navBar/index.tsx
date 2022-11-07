import { useEffect, useLayoutEffect, useState } from "react";
import Container from "../../../components/Container";
import AfexLogo from "./assets/afex-logo.png";
import { useRouter } from "next/router";
import Link from "next/link";

const navLinks = ["Home", "Courses", "Xpert", "Updates"];

export default function NavBar() {
  const [active, setActive] = useState("Home");
  const { asPath } = useRouter();
  let presentRoute = asPath.replace(asPath[0], "");


  useLayoutEffect(() => {
    presentRoute
      ? setActive(
          presentRoute.replace(
            presentRoute[0],
            presentRoute[0].toLocaleUpperCase()
          )
        )
      : setActive("Home");
  }, [presentRoute]);

  return (
    <Container>
      <nav className="flex items-center justify-between cursor-pointer gap-10 py-4">
        <img src={AfexLogo.src} alt="Afex-logo" className="pl-4" />
        <ul className="flex gap-5 justify-between items-center text-[1rem]">
          {navLinks.map((item, idx) => (
            <li
              key={idx}
              onClick={() => {
                setActive(item);
              }}
              className={
                active === item
                  ? "bg-[#C81107] rounded-xl w-[7.5rem] text-[#F2F2F2] p-3 leading-6 text-center"
                  : "rounded-xl w-[7.5rem] leading-6 text-black p-3 text-center"
              }
            >
              <Link
                href={
                  item === "Home"
                    ? "/"
                    : item.replace(item[0], item[0].toLocaleLowerCase())
                }
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
}
