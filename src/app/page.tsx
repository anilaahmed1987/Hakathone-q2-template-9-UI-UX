// import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Image from "next/image";
// import Navbar from "../components/Navbar";
import Navbar from "@/components/Navbar";
// import HeroSection from "../components/HeroSection"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Hero from "@/components/HeroSection";
// import Footer from "../components/Footer"
import Footer from "@/components/Footer";
// import About from "../components/About"
import About from "@/components/About";
// import FoodCata from "../components/FoodCata" 
import FoodCata from "@/components/FootCata";

// import AboutUs from "../AboutUs/page";
import AboutUs from "@/AboutUs/page";
import HeroSection from "@/components/HeroSection";
// import About from "../About/page"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Home() {
  return (
   
   <>
    <Navbar/>
    <HeroSection/>
    <About/>
    <FoodCata/>
   <AboutUs/>
    <Footer/>
   </>
  );
}