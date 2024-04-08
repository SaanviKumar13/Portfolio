import Certificates from "@/components/Certificates";
import ContactMe from "@/components/ContactMe";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Socials from "@/components/Socials";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-portfolio-white font-mono">
      <Head>
        <title>Saanvi Kumar</title>
      </Head>
      <Hero />
      <Navbar />
      <Socials />
      <Skills />
      <Certificates />
      <Projects />
      <ContactMe />
    </div>
  );
}
