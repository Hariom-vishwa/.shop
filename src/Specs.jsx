import React from "react";
import { useParams } from "react-router-dom";
import { womensWear } from "./Women";

export default function Specs() {
  const { proName } = useParams();
  const prod = womensWear.find((pro) => pro.name === proName);
  return (
    <>
      <div>
        <h1>{prod.size}</h1>
      </div>
    </>
  );
}
