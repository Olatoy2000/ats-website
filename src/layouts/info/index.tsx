import Duration from "./duration";
import OurValues from "./ourValues";
import Qualification from "./qualification";
import TeamWork from "./teamwork";
import NewInfoBackground from "./assets/bg-big3.png";
import AppleLastBack from "./assets/applelandingpage.png";


export default function Information() {
  return (
    <section
      className="flex flex-col gap-10 my-24 pl-12 pb-12 bg-cover"
      style={{ backgroundImage: `url(${NewInfoBackground.src})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%" }}
    >
      <OurValues />
      <Duration />
      <TeamWork />
      <Qualification />
      <img src={AppleLastBack.src} alt="" className="md:w-24 w-16 ml-24" />
    </section>
  );
}
