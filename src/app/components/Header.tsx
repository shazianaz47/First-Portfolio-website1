
import Link from 'next/link';
export default function Header() {
  return (
    <div className="bg-blue-200 text-black p-4">
      <nav className="flex justify-between items-center">
        <div className="text-lg font-bold">Design-O-Pedia</div>
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/skills">Skills</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact_us">Contact Me</Link>
        </div>
      </nav>
    </div>
  );
}
