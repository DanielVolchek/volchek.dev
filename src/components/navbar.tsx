import { Nav } from "./Nav";

export const Navbar = () => {
  return (
    <header className="h-32 flex items-center justify-between px-4">
      <div>LOGO</div>
      <Nav />
    </header>
  );
};
