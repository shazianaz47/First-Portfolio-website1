import Link from "next/link";

export default function Portfolio() {
    return (
      <section className="bg-blue-200 text-black p-8">
        <h1 className="text-4xl font-bold mb-4">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border p-4">
            <h2 className="text-xl font-bold">Behance</h2>
            <p>A platform where creators can showcase their work.</p>
            <Link href="https://www.behance.net/shazianaz1" className="text-blue-500">View Project</Link>
          </div>
          <div className="border p-4">
            <h2 className="text-xl font-bold">Github</h2>
            <p>A platform where developer can showcase their work.</p>
            <Link href="https://github.com/shazianaz47?tab=repositories" className="text-blue-500">View Project</Link>
          </div>
          <div className="border p-4">
            <h2 className="text-x1 font-bold">LinkdIn </h2>
            <p>A platform where developer can showcase their work</p>
            <Link href="https://www.linkedin.com/in/shazia-naz-8aa22b1b0" className="text-blue-500">View Project</Link>

          </div>
        </div>
        
      </section>
    );
  }
  