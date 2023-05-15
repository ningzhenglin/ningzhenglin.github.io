import { BrandGithub, BrandLinkedin, CurrencyRipple } from "tabler-icons-react";

const handleDownload = () => {
  const url = "./Ning_Resume.pdf";
  const link = document.createElement("a");
  link.href = url;
  link.download = "Ning_Resume.pdf";
  link.click();
};

export default function Navbar() {
  return (
    <>
      <div className=" navbar bg-base-100 bg-[#167e66] grid justify-items-center grid-cols-8 text-white text-lg menu menu-horizontal px-1">
        <CurrencyRipple size={48} strokeWidth={2} color={"black"} />
        <button className="text-white">
          <a href="https://ningzhenglin.github.io">David's Personal Website</a>
        </button>

        <button>
          <a href="https://ningzhenglin.github.io">Home</a>
        </button>
        <button className="w-24">Research</button>
        <button className="w-24">Experience</button>
        <button onClick={handleDownload}>CV Download</button>
        <button>
          <BrandGithub size={35} strokeWidth={2} color={"white"} />
        </button>
        <button>
          <BrandLinkedin size={35} strokeWidth={2} color={"white"} />
        </button>
      </div>
    </>
  );
}
