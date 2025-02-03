
import Link from "next/link"
import Header from "../components/Header"

export default function Skills() {
    return (
        <div>
            <div className="bg-blue-200 text-black px-6 py-6">
            <Link href="/home"><Header/></Link></div>
      <div className="bg-blue-200 text-gray-900 p-8">
        <h1 className="text-4xl font-bold mb-4">Skills</h1>
        <ul className="grid grid-cols-2 gap-4">
          <li>TypeScript</li>
          <li>HTML & CSS</li>
          <li>Next.js</li>
          <li>TailwindCSS</li>
          <li>ShadcnUI</li>
          <li>Graphic Design</li>
        </ul>
      </div>
      </div>
    );
  }
  