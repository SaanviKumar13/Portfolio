import Navbar from "@/components/Navbar";
import SocialBar from "@/components/SocialBar";

export default function Home() {
  return (
    <div className="bg-primary shadow-page bg-page-gradient h-screen">
      <Navbar />
      <SocialBar />
    </div>
  );
}
