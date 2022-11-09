import Container from "../../components/Container";
import NavBar from "./navBar";
import NewsBar from "./NewsBar";

function Header() {
  return (
    <header className="sticky top-0 z-50 flex flex-col bg-white">
      <NewsBar />
      <NavBar />
    </header>
  );
}

export default Header;
