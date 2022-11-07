import Container from "../Container";
import BawasaBack from "./assets/bawasa-back.png";

export default function LongEstablished() {
  return (
    <Container
      style={{ backgroundImage: `url(${BawasaBack.src})` }}
      children={undefined}
    ></Container>
  );
}
