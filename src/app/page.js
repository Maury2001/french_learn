"use client";
import Image from "next/image";
import NavBar from "./components/NavBar";
import log from "../../public/images/profren.png";
import Tutor from "./components/tutor";
import AnimatedText from "./components/AnimatedText";
import Footer from "./components/Footer";
import Homee from "./components/homee";
import Time from "./components/time";

export default function Home() {
  return (
    <main className="bg-white text-black">
      <nav className=" sticky w-full">
      <NavBar />
      </nav>
      
     <Homee/>
      <Tutor/>
      <Time/>
      <Footer/>
    </main>
  );
}
