import styled from "styled-components";
import Logo from "../../assets/soundboksSvg.svg?react";
import { motion } from "framer-motion";

const Overlay = () => {
  return (
    <>
      <Container>
        <TopLeft>
          <h1>
            CONNECTING PEOPLE <br />
            THROUGH THE <span>—</span>
            <br />
            POWER OF SOUND
          </h1>

          <p>
            Turn up with the worlds most powerful <br />
            Bluetooth speaker! —
          </p>
        </TopLeft>
        <BottomRight>
          <Arrow>
            <a href='#'>
              <h1>TURN UP &#x2192;</h1>
            </a>
          </Arrow>
          <Logo />
        </BottomRight>
        <BottomLeft>
          <p>Whenever and wherever you want to party, SOUNDBOKS has you covered.</p>
        </BottomLeft>
      </Container>
    </>
  );
};

export default Overlay;

const Container = styled.div`
  font-family: "Clash Display", sans-serif;
`;

const TopLeft = styled(motion.div)`
  position: absolute;
  top: 10vw;
  left: 5vw;

  h1 {
    padding: 0;
    font-weight: 400;
    line-height: 1.45em;
    font-size: 4rem;
    color: #2d2928;
    mix-blend-mode: difference;
    color: white;
    font-weight: 600;
  }

  p {
    /* border: 1px solid red; */
    font-size: 1rem;
    line-height: 1.5em;
    color: #2d2928;
    mix-blend-mode: difference;
    color: white;
    font-weight: 400;
    letter-spacing: 1px;
  }

  span {
    margin-left: 5rem;
    font-weight: 200;
    color: #2d2928;
    mix-blend-mode: difference;
    color: white;
  }
`;

export const Arrow = styled.div`
  position: absolute;
  bottom: 19.5vw;
  right: 39vw;
  width: 20%;
  font-size: 0.5rem;
  a {
    text-decoration: none;
    color: #2d2928;
    mix-blend-mode: difference;
    color: white;
  }
`;

export const BottomRight = styled.div`
  position: absolute;
  bottom: 5vw;
  right: 5vw;
  width: 95ch;
  max-width: 40%;
  text-align: right;
`;

export const BottomLeft = styled.div`
  position: absolute;
  bottom: 5vw;
  left: 5vw;
  max-width: 40%;

  p {
    font-size: 1rem;
    font-weight: 300;
    letter-spacing: 1px;
    mix-blend-mode: difference;
    color: white;
    font-weight: 400;
    letter-spacing: 1px;
  }
`;
