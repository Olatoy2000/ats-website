import Card from "./Card";
import Container from "../../../components/Container";
import CORE_VALUES from "./CoreValues";
import MobileValues from "./MobileValues";

function OurValues() {
  return (
    <Container>
      <section className="flex flex-col items-center justify-center gap-8 pt-10">
        <h2 className="font-bold text-[clamp(2rem,3vw,3.5rem)] text-[#313131] pt-8 align-middle leading-[3rem]">
          Our Values
        </h2>
        <div className="flex flex-col justify-center items-center gap-12 lg:grid lg:items-center md:justify-center lg:justify-center md:grid-cols-3 md:min-w-max  md:gap-10 pt-8 duration-300 ease-in-out">
          {CORE_VALUES.map((props, idx) => (
            <Card key={idx} {...props} />
          ))}
        </div>
        {/* <MobileValues /> */}
      </section>
    </Container>
  );
}

export default OurValues;
