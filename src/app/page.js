'use client'
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Services from "./components/Services";
import Process from "./components/Process";
import Feature from "./components/Feature";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import Aos from "aos";


export default function Home() {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <>
    <Navbar/>

    <section id="home" >
    <HeroSection/>
    </section>


    <section id="about">
    <About/>
    </section>

    <section id="service">
      <Services/>
    </section>

    <Process/>

    <section>
      <Feature/>
    </section>

    <section id="contact" >
      <Contact/>
    </section>
    <Footer/>
    <ScrollToTopButton />
    </>
  );
}
