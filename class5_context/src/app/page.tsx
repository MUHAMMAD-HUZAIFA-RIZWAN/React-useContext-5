"use client";
import Image from "next/image";
import Header from "./Header";
import { createContext, useState } from "react";

const SectionContext = createContext({state:0 ,setState:(newState: number)=>{},newstate:0, setNewstate:(newState: number)=>{}});
export default function Home() {
  const [state, setState] = useState(0);
  const [newstate, setNewstate] = useState(0);
  const func1=()=>{
    setState(state+1)

  }
  const func2=()=>{
    setNewstate(newstate+1)

  }
  return (
    <SectionContext.Provider value={{state,setState,newstate,setNewstate}}>
      <div>
        <div>Hello Q2</div>
        <Header />
      </div>
      <button className="px-48 bg-blue-600 mt-6" onClick={func1}>Increment Header</button>
      <button className="px-48 mt-6 bg-green-600" onClick={func2}>Increment Lesson</button>
    </SectionContext.Provider>
  );
}

export { SectionContext };