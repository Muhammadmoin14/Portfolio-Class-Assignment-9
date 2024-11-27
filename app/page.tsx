import Hero from "@/components/Hero";
import Header from "../components/Header"
import Skill from "@/components/Skill";
import About from "@/components/About";
import Project from "@/components/Project";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
    </div>
  );
}
