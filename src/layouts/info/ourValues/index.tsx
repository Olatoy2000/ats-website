import Card from "./Card";
import empathy_initial from "./assets/empathy/initial.png";
import empathy_final from "./assets/empathy/final.png";
import excellence_initial from "./assets/excellence/excell-initial.png";
import excellence_final from "./assets/excellence/excell-final.png";
import execution_initial from "./assets/execution/initial.png";
import execution_final from "./assets/execution/final.png";
import Container from "../../../components/Container";

const CORE_VALUES = [
  {
    initial_mesh: execution_initial,
    final_mesh: execution_final,
    title: "Execution",
    subtitle: "we deliver",
  },
  {
    initial_mesh: excellence_initial,
    final_mesh: excellence_final,
    title: "Excellence",
    subtitle: "we deliver results",
  },
  {
    initial_mesh: empathy_initial,
    final_mesh: empathy_final,
    title: "Empathy",
    subtitle: "we deliver results humanely",
  },
];

function OurValues() {
  return (
    <Container className="flex flex-col items-center gap-8 pt-10">
      <h2 className="font-bold text-[3.5rem] text-[#313131] pt-8 align-middle leading-[3rem]">
        Our Values
      </h2>

      <div className="grid items-center justify-center w-full grid-cols-3 gap-10 pt-8 duration-300 ease-in-out">
        {CORE_VALUES.map((props, idx) => (
          <Card key={idx} {...props} />
        ))}
      </div>
    </Container>
  );
}

export default OurValues;
