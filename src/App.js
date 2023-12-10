import React, { useState } from "react";
import { Canvas } from "react-three-fiber";

const Lamp = ({ lightOn, scale }) => {
  const lampshadeColor = lightOn ? "#FFD700" : "white";

  return (
    <mesh scale={scale}>
      <mesh position={[0, -1, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 1, 32]} />
        <meshStandardMaterial color="gray" />
      </mesh>
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 3, 32]} />
        <meshStandardMaterial color="gray" />
      </mesh>
      <mesh position={[0, 1.5, 0]}>
        <coneGeometry args={[0.7, 1.5, 32]} />
        <meshStandardMaterial color={lampshadeColor} />
      </mesh>
      {lightOn && (
        <pointLight position={[0, 1.5, 0]} intensity={1} color="yellow" />
      )}
    </mesh>
  );
};

const App = () => {
  const [lightOn, setLightOn] = useState(true);

  const toggleLight = () => {
    setLightOn(!lightOn);
  };
  const lampScale = [2, 2, 2];

  return (
    <div>
      <Canvas
        style={{ marginTop: "10px", position: "relative", height: "60vh" }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <Lamp lightOn={lightOn} scale={lampScale} position={[0, 0, 0]} />
      </Canvas>
      <div
        style={{
          position: "absolute",
          bottom: 20,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <button
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: lightOn ? "#FFD700" : "#3CB371",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "background-color 0.3s ease",
          }}
          onClick={toggleLight}
        >
          {lightOn ? "Turn Off" : "Turn On"}
        </button>
      </div>
    </div>
  );
};
export default App;
