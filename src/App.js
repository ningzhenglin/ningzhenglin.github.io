import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="App App-header bg-[#fff]">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-black">
          Hello! This Website is still in the process of restructuring
        </p>
      </div>

      <div className="App-header1 grid grid-cols-2 place-content-around mt-10 ml-10 text-xl">
        <div className="font-serif text-black grid grid-cols-1">
          <p>David Ning:</p>
          <p>
            Hello! My name is Zhenglin(David) Ning. I am currently enrolled as
            an undergraduate student in University of California, Irvine (UCI)
            pursuing a major in Computer Science and a minor in Sociology. I
            anticipate to graduate with the class of 2024. My current GPA is
            around 3.54.
          </p>
          <p>
            I am very interested in Artificial Intelligence and its application
            with Visual Computing. With the combination of AI and VR/AR, I
            believe that it can make a significant impact on people's lives. In
            my studies, I actively learn knowledge that involves AI and VR/AR. I
            took many courses and did a lot of hands-on projects, and read books
            regarding to those topics, those can be found in my research and
            experience field.
          </p>
          <p>
            Below, I will list classes that I had taken at College and High
            School and books that I had read.
          </p>
        </div>

        <div className="grid grid-cols-1 justify-items-center justify-center">
          <div className="md:w-1/2">
            <img src="./D1.JPG" alt="" className="w-full rounded-lg" />
          </div>
        </div>
      </div>

      <div className="App-header1 place-content-around mt-10 ml-10 text-xl">
        <div className="font-serif text-black">
          <p>This is the section for courses</p>
        </div>
      </div>

      <div className="App-header1 grid grid-cols-2 place-content-around mt-10 ml-10 text-xl">
        <div className="font-serif text-black grid grid-cols-1">
          <p>This is the section for books</p>
        </div>
      </div>

      <div className="App-header1 grid grid-cols-2 place-content-around mt-10 ml-10 text-xl">
        <div className="font-serif text-black grid grid-cols-1">
          <p>This is the section for Hobbies</p>
        </div>
      </div>
    </>
  );
}

export default App;
