import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FaBars, FaTimes } from "react-icons/fa";
import { clsx, ActionIcon, Popover } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Container from "../../../components/Container";
import AfexLogo from "./assets/afex-logo.png";
import Link from "next/link";

const navLinks = ["Home", "Courses", "Xpert", "Updates"];

function MenuList() {
  const { asPath } = useRouter();

  return (
    <ul className="flex flex-col md:flex-row min-w-[200px] md:items-center justify-between gap-3">
      {navLinks.map((el, idx) => (
        <li
          key={idx}
          className={clsx(
            "md:rounded-xl leading-6 p-3 md:px-6 md:text-center",
            el.toLocaleLowerCase() === asPath.slice(1) ||
              (el === "Home" && asPath === "/")
              ? "bg-[#C81107]  text-[#F2F2F2]"
              : "text-black"
          )}
        >
          <Link href={el === "Home" ? "/" : el.toLocaleLowerCase()}>{el}</Link>
        </li>
      ))}
    </ul>
  );
}

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const matches = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (matches) setIsMenuOpen(false);
  }, [matches]);

  return (
    <Container>
      <nav className="flex items-center cursor-pointer justify-between">
        <Link href="/">
          <img src={AfexLogo.src} alt="Afex landing page logo" />
        </Link>

        {matches ? (
          <MenuList />
        ) : (
          <Popover position="bottom-end" opened={isMenuOpen}>
            <Popover.Target>
              <ActionIcon onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </ActionIcon>
            </Popover.Target>
            <Popover.Dropdown p="xs">
              <MenuList />
            </Popover.Dropdown>
          </Popover>
        )}
      </nav>
    </Container>
  );
}
