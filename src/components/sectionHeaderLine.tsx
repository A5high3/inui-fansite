import React from "react";
import peach from "../assets/images/peachsoda.gif";
import lemon from "../assets/images/lemonsoda.gif";
import meloncream from "../assets/images/meloncreamsoda.gif";

export default function SectionHeaderLine() {
  return (
    <>
      <img src={peach} style={{ width: 50, height: 50 }} />
      <img src={lemon} style={{ width: 50, height: 50 }} />
      <img src={meloncream} style={{ width: 50, height: 50 }} />
    </>
  );
}