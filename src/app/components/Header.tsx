
import Link from 'next/link';
export default function Header() {
  return (
    <header className="bg-blue-200 text-black p-4">
      <nav className="flex justify-between items-center">
        <div className="text-lg font-bold">Design-O-Pedia</div>
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
