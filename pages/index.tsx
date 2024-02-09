import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Socials from "@/components/Socials";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-primary font-main shadow-page bg-page-gradient">
      <Head>
        <title>Saanvi Kumar</title>
      </Head>
      <Navbar />
      <Socials />
      <Hero />
      <Skills />
    </div>
  );
}
