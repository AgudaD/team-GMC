import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between text-white bg-slate-950 font-grotesk px-12 py-6">
      <p className="text-2xl font-semibold">GitHub</p>

      <ul className="flex items-center justify-center gap-8 text-lg">
        <Link to={"/"}>
            <li>Home</li>
        </Link>
        <Link to={"about"}>
            <li>About</li>
        </Link>
        <Link to={"organizations"}>
            <li>Organizations</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
