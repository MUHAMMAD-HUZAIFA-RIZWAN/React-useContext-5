"use client";
import React, { useContext } from "react";
import { SectionContext } from "./page";

const Section = () => {
  const {newstate} = useContext(SectionContext);
  return (
    <div>
      <div className="bg-red-400">section- Lesson {newstate}</div>
    </div>
  );
};

export default Section;
