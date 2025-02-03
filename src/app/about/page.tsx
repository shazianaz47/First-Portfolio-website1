import Link from "next/link";
import Header from "../components/Header";

export default function About() {
    return (
      
      <div>
      <div className="bg-blue-200 text-black px-6 py-6">
     <Link href="/home"><Header/></Link></div>
     <div className="bg-white text-black px-6 py-6 mt-10">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="mb-4">
          Hi! I am Shazia Naz, a graphic designer and web developer with a passion for creating beautiful user interfaces and 
          functional websites. I have an MSc in Statistics and skills in TypeScript, HTML, CSS, and Next.js.
        <br/>I am currently working on various design and development projects, including my company Design-o-Pedia, 
        where I collaborate with creators and designers.
        </p>
      </div>
      </div>
     
    );
  }
  