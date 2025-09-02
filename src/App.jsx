import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    setCount(count + 1);

    // Trigger press animation
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 150); 
  };

  return (
    <div
      style={{
        height: "100vh", // full viewport height
        width: "100vw",  // full viewport width
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black", 
      }}
    >
      <div
        onClick={handleClick}
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: "#4CAF50",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "24px",
          cursor: "pointer",
          borderRadius: "12px",
          userSelect: "none",
          transition: "transform 0.15s ease",
          transform: isPressed ? "scale(0.9)" : "scale(1)",
          boxShadow: isPressed
            ? "0 2px 6px rgba(0,0,0,0.6)"
            : "0 6px 12px rgba(0,0,0,0.6)",
        }}
      >
        Count: {count}
      </div>
    </div>
  );
}
