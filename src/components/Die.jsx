import React from "react";

export default function Die(prop) {
  const { value, isHeld, holdDice } = prop;

  const styles = {
    backgroundColor: isHeld ? "#59E391" : "#fff",
  };

  return (
    <div className="die" style={styles} onClick={holdDice}>
      {value}
    </div>
  );
}
