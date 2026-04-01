import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-gray-300 text-sm px-6 py-3 flex items-center justify-between">
      {/* Left */}
      <div>© {new Date().getFullYear()} DAYANIDHI. All rights reserved.</div>

      {/* Center */}
      {/* <div className="flex items-center gap-4">
        <a
          href="https://github.com/Dayanidhi-N"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          GitHub
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          Medium
        </a>
      </div> */}

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* Gradient Logo */}
        <span className="text-lg font-bold tracking-wide bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">
          {"{ Dcode }"}
        </span>

        {/* Family Link */}
        <Link
          to="/family"
          className="text-gray-500 hover:text-pink-400 transition underline"
        >
          Family
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
