import React from "react";

export default function Die(prop){
  const {value} = prop
  return (
    <div className="die" id={value}>{value}</div>
  )
}