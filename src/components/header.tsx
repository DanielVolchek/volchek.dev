import Link from "./link";
import { breakpoints } from "../layouts/base";

export default function Header() {
  const navstyles = `text-2xl !text-black hover:!text-teal-300`;
  return (
    <header className="relative flex justify-center py-4">
      <nav className={`flex w-full justify-between px-4 ${breakpoints}`}>
        <Link className={navstyles} href="/" content="Home" />
        <div className="mr-4 flex justify-between gap-6">
          <Link className={navstyles} href="/blog" content="Blog" />
          <Link className={navstyles} href="/about" content="About" />
        </div>
      </nav>
      <div
        className={`absolute left-0 bottom-0 h-1 w-screen bg-teal-300`}
      ></div>
    </header>
  );
}
// "flex justify-center pb-4 content-[''] after:absolute after:left-0 after:top-[4.5rem] after:h-[2px] after:w-screen after:bg-slate-300"
// export default function Nav() {
//   const navstyles = "text-2xl";
//   return (
//     <nav className="mx-auto mt-4 h-8 w-full ">
//       <div className="flex justify-between md:w-3/4 lg:w-1/2"></div>
//       <Link className={navstyles} href="/" content="Home" />
//       <div className="">
//         <Link className={navstyles} href="/blog" content="Blog" />
//         <Link className={navstyles} href="/about" content="About" />
//       </div>
//     </nav>
//   );
// }
