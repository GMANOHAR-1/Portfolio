import Clients from "@/Components/Clients";
import Experience from "@/Components/Experience";
import Footer from "@/Components/Footer";
import Grid from "@/Components/Grid";
import Hero from "@/Components/Hero";
import RecentProjects from "@/Components/RecentProjects";
import { FloatingNav } from "@/Components/ui/FloatingNav";
import { navItems } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
     <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
     <div className="max-w-7xl w-full">
      <FloatingNav navItems={navItems}/>
     <Hero/>
    
     <RecentProjects/>
     <Grid/>
     <Clients/>
     <Experience/>
     <Footer/>
     </div>
      
     </main>
  );
}
