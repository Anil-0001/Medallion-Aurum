import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import ProjectSnapshot from "@/components/sections/ProjectSnapshot";
import About from "@/components/sections/About";
import Density from "@/components/sections/Density";
import Story from "@/components/sections/Story";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProjectSnapshot />
        <About />
        <Density />
        <Story />
      </main>
    </>
  );
}
