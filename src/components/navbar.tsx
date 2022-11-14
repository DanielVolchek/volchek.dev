import Link from "./link";

export default function Nav() {
  const navstyles = "text-2xl";
  return (
    <nav className="flex items-center justify-between pb-4 content-[''] after:absolute after:left-0 after:top-[4.5rem] after:h-[2px] after:w-screen after:bg-slate-300">
      <Link className={navstyles} href="/" content="Home" />
      <div className="mr-4 flex justify-between gap-6">
        <Link className={navstyles} href="/blog" content="Blog" />
        <Link className={navstyles} href="/about" content="About" />
      </div>
    </nav>
  );
}
