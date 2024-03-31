import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flex justify-center gap-6 text-gray-500 mb-10">
      <Link href="/">home</Link>
      <Link href="/projects">projects</Link>
      <Link href="/work">work</Link>
    </nav>
  );
}
