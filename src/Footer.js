import React from "react";
import { BrandGithub, BrandLinkedin } from "tabler-icons-react";

const handleLinkedIn = () => {
  const url = "https://www.linkedin.com/in/ningdavid"; // Replace with the desired URL
  window.open(url, "_blank");
};

const handleGithub = () => {
  const url = "https://github.com/Zotman03";
  window.open(url, "_blank");
};

const handleDownload = () => {
  const url = "./Ning_Resume.pdf";
  const link = document.createElement("a");
  link.href = url;
  link.download = "Ning_Resume.pdf";
  link.click();
};

const handleScrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export default function Navbar() {
  return (
    <footer className="grid grid-cols-1 bg-[#167e66] h-64 justify-items-center">
      <div className="items-center text-white mt-5">
        <p>David Ning's Personal Website (2023)</p>
        <p>Contact me at +1 (425)-443-8097</p>
      </div>
      <button onClick={handleGithub}>
        <BrandGithub size={35} strokeWidth={2} color={"white"} />
      </button>
      <button onClick={handleLinkedIn}>
        <BrandLinkedin size={35} strokeWidth={2} color={"white"} />
      </button>
      <button onClick={handleDownload} className="text-white">
        CV
      </button>
      <button onClick={handleScrollTop} className="text-white  mb-5">
        Back to Top
      </button>
    </footer>
  );
}
