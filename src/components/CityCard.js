// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// ------------------------      CITYCARD.JS     ----------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //

// CSS
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import "../App.css";

export default function CityCard(props) {
  // ----------------- DRAG ANIMATION --------------- \\
  const [prop, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: config.default,
  }));
  const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 20,
    1,
  ];
  const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
  // ----------------- END OF DRAG ANIMATION --------------- \\

  return (
    <Container>
      <ContainerCard
        // ----------------- DRAG ANIMATION --------------- \\
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{
          transform: prop.xys.to(trans),
        }}
        // ----------------- END OF DRAG ANIMATION --------------- \\

        onClick={() => props.onClick(props.index)}
      >
        <StyledImg
          src={`http://openweathermap.org/img/wn/${props.info.weather[0].icon}@4x.png`}
          alt="Weather image"
        />
        <StyledH1>{props.info.name}</StyledH1>
        <StyledH2>
          {Math.round(props.info.main.temp)}°C <br />
        </StyledH2>
        <StyledH3>{props.info.weather[0].main}</StyledH3>
      </ContainerCard>
    </Container>
  );
}

// CSS PART

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.5rem;
`;

const ContainerCard = styled(animated.div)`
  width: 200px;
  height: 365px;
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.1);
  background-size: contain;
  border-radius: 20px;
  z-index: 1;
  backdrop-filter: blur(10px);
  border: 2px solid transparent;
  background-clip: border-box;
  cursor: pointer;
  text-align: center;
  color: white;
  padding: 2rem;
`;

const StyledImg = styled.img`
  width: 150px;
  height: auto;
  border-radius: 50%;
`;

const StyledH1 = styled.h1`
  font-size: 2rem;
  letter-spacing: 1.5;
  font-family: "Montserrat";
`;

const StyledH2 = styled.h2`
  line-height: 1.5;
  letter-spacing: 1.15;
  font-family: "Montserrat";
  font-size: 2.5rem;
`;

const StyledH3 = styled.h3`
  line-height: 1.5;
  letter-spacing: 1.15;
  font-family: "Montserrat";
  font-size: 1.5rem;
`;
