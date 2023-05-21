import { BrandGithub, BrandLinkedin, CurrencyRipple } from "tabler-icons-react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const handleDownload = () => {
  const url = "./Ning_Resume.pdf";
  const link = document.createElement("a");
  link.href = url;
  link.download = "Ning_Resume.pdf";
  link.click();
};

const handleLinkedIn = () => {
  const url = "https://www.linkedin.com/in/ningdavid"; // Replace with the desired URL
  window.open(url, "_blank");
};

const handleGithub = () => {
  const url = "https://github.com/Zotman03";
  window.open(url, "_blank");
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li
      className={
        isActive
          ? "active flex items-center justify-center justify-items-center"
          : "flex items-center justify-center justify-items-center"
      }
    >
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default function Navbar() {
  return (
    <>
      <nav className="bg-[#167e66] grid grid-cols-9 justify-items-center text-white text-lg font-serif list-none">
        <CurrencyRipple size={50} strokeWidth={2} color={"white"} />
        <Link to="/" className="flex items-center">
          Home
        </Link>

        <CustomLink to="/research">
          <button>Research</button>
        </CustomLink>
        <CustomLink to="/experience">
          <button>Experience</button>
        </CustomLink>
        <CustomLink to="/teaching">
          <button>Teaching</button>
        </CustomLink>
        <CustomLink to="/award">
          <button>Award</button>
        </CustomLink>
        <button onClick={handleDownload}>CV Download</button>
        <button onClick={handleGithub}>
          <BrandGithub size={35} strokeWidth={2} color={"white"} />
        </button>
        <button onClick={handleLinkedIn}>
          <BrandLinkedin size={35} strokeWidth={2} color={"white"} />
        </button>
      </nav>
    </>
  );
}
