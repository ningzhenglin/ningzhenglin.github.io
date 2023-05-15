import { BrandGithub, BrandLinkedin, CurrencyRipple } from "tabler-icons-react";

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

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100 bg-[#167e66] grid grid-cols-8 justify-items-center text-white text-lg font-serif">
        <CurrencyRipple size={50} strokeWidth={2} color={"black"} />
        <button>
          <a href="https://ningzhenglin.github.io">Home</a>
        </button>
        <button className="w-24">Research</button>
        <button className="w-24">Experience</button>
        <button className="w-24">Award</button>
        <button onClick={handleDownload}>CV Download</button>
        <button onClick={handleGithub}>
          <BrandGithub size={35} strokeWidth={2} color={"white"} />
        </button>
        <button onClick={handleLinkedIn}>
          <BrandLinkedin size={35} strokeWidth={2} color={"white"} />
        </button>
      </div>
    </>
  );
}
