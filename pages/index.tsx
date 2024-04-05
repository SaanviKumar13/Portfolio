import Certificates from "@/components/Certificates";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Socials from "@/components/Socials";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-primary font-mono">
      <Head>
        <title>Saanvi Kumar</title>
      </Head>
      <Hero />
      <Navbar />
      <Socials />
      <Skills />
      <Certificates />
    </div>
  );
}
