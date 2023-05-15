import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="App-header1 grid grid-cols-2 place-content-around mt-10 ml-10">
        <div className="font-serif text-black grid grid-cols-1">
          <p>About Me:</p>
          <p>
            School, year, Major, Minor, GPA. Information regarding Interests.
            Technical Skills and what I worked on in Compsci. Next Section is
            Education (Classes Taken).
          </p>
        </div>

        <div className="grid grid-cols-1 justify-items-center justify-center">
          <div className="md:w-1/2">
            <img src="./D1.JPG" alt="" className="w-full rounded-lg" />
          </div>
        </div>
      </div>

      <div className="App App-header bg-[#fff]">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-black">
          David's Website Hello! This Website is still in the process of
          building
        </p>
      </div>
    </>
  );
}

export default App;
