import Duration from "./duration";
import OurValues from "./ourValues";
import Qualification from "./qualification";
import TeamWork from "./teamwork";

import InfoBackground from "./assets/info-bg.png";

export default function Information() {
  return (
    <section
      className="flex flex-col gap-10 my-24 bg-no-repeat bg-cover bg-top"
      style={{ backgroundImage: `url(${InfoBackground.src})` }}
    >
      <OurValues />
      <Duration />
      <TeamWork />
      <Qualification />
    </section>
  );
}
