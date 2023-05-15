import "./NavBar.css";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 flex-1 bg-[#8c1515]">
      <div className="flex-1 text-white">David Ning's Website</div>
      <div className="flex-none list-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="https://ningzhenglin.github.io">Home</a>
          </li>
          <li>Research</li>
          <li>Experience</li>
        </ul>
      </div>
    </div>
  );
}
