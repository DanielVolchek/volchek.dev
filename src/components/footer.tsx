import { breakpoints } from "../layouts/base";

export default function Footer() {
  return (
    <footer className={`relative mt-4 flex justify-center pt-4`}>
      <div className={`${breakpoints}`}>
        <h1>hello world</h1>
      </div>
      <div className="absolute left-0 top-0 h-1 w-screen bg-slate-300"></div>
    </footer>
  );
}
