import NavigationBar from "./navBar";
import NewsBar from "./NewsBar";

function Header() {
  return (
    <header className="sticky top-0 z-50 flex flex-col bg-white">
      <NewsBar />
      <NavigationBar />
    </header>
  );
}

export default Header;
