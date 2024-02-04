import Navbar from "@/components/Navbar";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <div className="bg-primary shadow-page bg-page-gradient h-screen">
      <Navbar />
      <Socials />
    </div>
  );
}
