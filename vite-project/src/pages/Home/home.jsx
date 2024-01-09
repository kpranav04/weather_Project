import "./home.css";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Earth } from "../../components/earth";
import { TopSection } from "../../components/topEarth";
import Navbar from "../../components/navbar/navbar";

const CanvasContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

function App() {
  return (
    <>
    <Navbar/>
    <div className="bodyfic">
    <CanvasContainer>
      <TopSection />
      <Canvas>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </CanvasContainer>
    </div>
    </>
  );
}

export default App;
