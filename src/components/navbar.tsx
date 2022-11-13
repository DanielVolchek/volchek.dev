import Link from "./link";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between pb-4 content-[''] after:absolute after:left-0 after:top-[4.5rem] after:h-[2px] after:w-screen after:bg-slate-300">
      <Link href="/" content="Home" />
      <div className="flex justify-between gap-6">
        <Link href="/blog" content="Blog" />
        <Link href="/about" content="About" />
      </div>
    </nav>
  );
}
