import "./App.css";

const handlePlan = () => {
  const url = "./DN_3YPlan.pdf";
  const link = document.createElement("a");
  link.href = url;
  link.download = "DN_3YPlan.pdf";
  link.click();
};

function App() {
  return (
    <>
      <div className="App-header1 grid grid-cols-2 place-content-around mt-10 ml-10 text-xl bg-[#fff]">
        <div className="font-serif text-black grid grid-cols-1">
          <b>David Ning:</b>
          <p>
            Hello! My name is Zhenglin(David) Ning. I am a Permanent Resident of
            the United States of America. I am currently enrolled as an
            undergraduate student in University of California, Irvine (UCI)
            pursuing a major in Computer Science and a minor in Sociology. I
            anticipate to graduate with the class of 2024. My current GPA is
            3.5+.
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
      <div className="divider"></div>

      <div className="App-header1 place-content-around mt-10 ml-10 text-xl grid grid-cols-2 bg-[#fff]">
        <div className="grid grid-cols-1 justify-items-center justify-center">
          <div className="md:w-1/2">
            <img src="./uci.png" alt="" className="w-full rounded-lg" />
          </div>
        </div>
        <div className="font-serif text-black">
          <p>
            <b>Undergraduate Courses at University of California, Irvine:</b>
          </p>
          <p>
            CS Classes number that starts with 11x is about visual computing
          </p>
          <p>
            CS Classes number that starts with 12x is about computer
            informations
          </p>
          <p>
            CS Classes number that starts with 13x is about computer networks
          </p>
          <p>
            CS Classes number that starts with 14x is about computer systems
          </p>
          <p>CS Classes number that starts with 16x is about algorithms</p>
          <p>
            CS Classes number that starts with 17x is about intelligence systems
          </p>
          <div className="grid grid-cols-5 gap-3 mr-10 mt-2">
            <label htmlFor="my-modal-179" className="btn">
              CS 179
            </label>

            <input type="checkbox" id="my-modal-179" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative">
                <label
                  htmlFor="my-modal-179"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <h3 className="text-lg font-bold">
                  Algorithms for Probabilistic and Deterministic Graphical
                  Models
                </h3>
                <p className="py-4">
                  Graphical model techniques dealing with probabilistic and
                  deterministic knowledge representations. Focuses on graphical
                  models such as constraint networks, Bayesian networks, and
                  Markov networks that have become a central paradigm for
                  knowledge representation and reasoning in AI and general
                  computer science.
                </p>
              </div>
            </div>

            <label htmlFor="my-modal-1" className="btn">
              CS 178
            </label>

            <input type="checkbox" id="my-modal-1" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative">
                <label
                  htmlFor="my-modal-1"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <h3 className="text-lg font-bold">
                  Machine Learning and Data-Mining
                </h3>
                <p className="py-4">
                  Introduction to principles of machine learning and data-mining
                  applied to real-world datasets. Learn about algorithms such as
                  KNN, Cluster Algorithms, Neural Network
                </p>
              </div>
            </div>

            <label htmlFor="my-modal-175" className="btn">
              CS 175
            </label>

            <input type="checkbox" id="my-modal-175" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative">
                <label
                  htmlFor="my-modal-175"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <h3 className="text-lg font-bold">
                  Project in Artificial Intelligence
                </h3>
                <p className="py-4">
                  Construction of a working artificial intelligence system.
                  Evaluation of capabilities of the system including impact of
                  knowledge representation.
                </p>
              </div>
            </div>

            <label htmlFor="my-modal-2" className="btn">
              CS 171
            </label>

            <input type="checkbox" id="my-modal-2" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative">
                <label
                  htmlFor="my-modal-2"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <h3 className="text-lg font-bold">
                  Introduction to Artificial Intelligence
                </h3>
                <p className="py-4">
                  Different means of representing knowledge and uses of
                  representations in heuristic problem solving. Representations
                  considered include predicate logic, semantic nets, procedural
                  representations, natural language grammars, and search trees.
                </p>
              </div>
            </div>

            <label htmlFor="my-modal-6" className="btn">
              CS 161
            </label>

            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative">
                <label
                  htmlFor="my-modal-6"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <h3 className="text-lg font-bold">
                  Design and Analysis of Algorithms
                </h3>
                <p className="py-4">
                  Techniques for efficient algorithm design, including
                  divide-and-conquer and dynamic programming, and time/space
                  analysis. Fast algorithms for problems applicable to networks,
                  computer games, and scientific computing, such as sorting,
                  shortest paths, minimum spanning trees, network flow, and
                  pattern matching.
                </p>
              </div>
            </div>

            <label htmlFor="my-modal-5" className="btn">
              CS 143A
            </label>

            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative">
                <label
                  htmlFor="my-modal-5"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <h3 className="text-lg font-bold">
                  Principles of Operating Systems
                </h3>
                <p className="py-4">
                  Principles and concepts of process and resource management,
                  especially as seen in operating systems. Processes, memory
                  management, protection, scheduling, file systems, and I/O
                  systems are covered. Concepts illustrated in the context of
                  several well-known systems.
                </p>
              </div>
            </div>

            <label htmlFor="my-modal-4" className="btn">
              CS 132
            </label>

            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative">
                <label
                  htmlFor="my-modal-4"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <h3 className="text-lg font-bold">Computer Networks</h3>
                <p className="py-4">
                  Computer network architectures, protocols, and applications.
                  Internet congestion control, addressing, and routing. Local
                  area networks. Multimedia networking.
                </p>
              </div>
            </div>

            <label htmlFor="my-modal-122B" className="btn">
              CS 122B
            </label>

            <input
              type="checkbox"
              id="my-modal-122B"
              className="modal-toggle"
            />
            <div className="modal">
              <div className="modal-box relative">
                <label
                  htmlFor="my-modal-122B"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <h3 className="text-lg font-bold">
                  Project in Databases and Web Applications
                </h3>
                <p className="py-4">
                  Introduces students to advanced database technologies and web
                  applications. Topics include database connectivity
                  (ODBC/JDBC), extending databases using stored procedures,
                  database administration, web servers, web programming
                  languages (Java servlets, XML, Ajax, and mobile platforms).
                </p>
              </div>
            </div>

            <label htmlFor="my-modal-122A" className="btn">
              CS 122A
            </label>

            <input
              type="checkbox"
              id="my-modal-122A"
              className="modal-toggle"
            />
            <div className="modal">
              <div className="modal-box relative">
                <label
                  htmlFor="my-modal-122A"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <h3 className="text-lg font-bold">
                  Introduction to Data Management
                </h3>
                <p className="py-4">
                  Introduction to the design of databases and the use of
                  database management systems (DBMS) for applications. Topics
                  include entity-relationship modeling for design, relational
                  data model, relational algebra, relational design theory, and
                  Structured Query Language (SQL) programming.
                </p>
              </div>
            </div>

            <label htmlFor="my-modal-121" className="btn">
              CS 121
            </label>

            <input type="checkbox" id="my-modal-121" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative">
                <label
                  htmlFor="my-modal-121"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <h3 className="text-lg font-bold">Information Retrieval</h3>
                <p className="py-4">
                  An introduction to information retrieval including indexing,
                  retrieval, classifying, and clustering text and multimedia
                  documents.
                </p>
              </div>
            </div>

            <label htmlFor="my-modal-3" className="btn">
              CS 118
            </label>

            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative">
                <label
                  htmlFor="my-modal-3"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <h3 className="text-lg font-bold">
                  Introduction to Virtual Reality
                </h3>
                <p className="py-4">
                  Introduces virtual reality systems and software. Topics
                  include computer graphics pipeline, human visual system and
                  perception, head mounted displays, image formation, sensors
                  and tracking, and 3D sound. Students use a popular
                  cross-platform game engine to create VR environments.
                </p>
              </div>
            </div>

            <label htmlFor="my-modal-116" className="btn">
              CS 116
            </label>

            <input type="checkbox" id="my-modal-116" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative">
                <label
                  htmlFor="my-modal-116"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <h3 className="text-lg font-bold">
                  Computational Photography and Vision
                </h3>
                <p className="py-4">
                  Introduces the problems of computer vision through the
                  application of computational photography. Specific topics
                  include photo-editing (image warping, compositing, hole
                  filling), panoramic image stitching, and face detection for
                  digital photographs.
                </p>
              </div>
            </div>

            <label htmlFor="my-modal-8" className="btn">
              ICS 53
            </label>

            <input type="checkbox" id="my-modal-8" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative">
                <label
                  htmlFor="my-modal-8"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <h3 className="text-lg font-bold">
                  Principles in System Design
                </h3>
                <p className="py-4">
                  Introduces basic principles of system software: operating
                  systems, compilers, and networking. Exposure to the following
                  topics through theoretical and practical programming
                  experiences: linking and loading, process and memory
                  management, concurrency and synchronization, network
                  communication, programming for performance, etc.
                </p>
              </div>
            </div>

            <label htmlFor="my-modal-7" className="btn">
              ICS 51
            </label>

            <input type="checkbox" id="my-modal-7" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative">
                <label
                  htmlFor="my-modal-7"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <h3 className="text-lg font-bold">
                  Introductory Computer Organization
                </h3>
                <p className="py-4">
                  Multilevel view, design, and operation of computer system
                  components. Machine-level data and instruction representation.
                  Instruction sets and addressing modes. Memory organization.
                  Laboratory work using low-level programming languages.
                </p>
              </div>
            </div>

            <label htmlFor="my-modal-46" className="btn">
              ICS 46
            </label>

            <input type="checkbox" id="my-modal-46" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative">
                <label
                  htmlFor="my-modal-46"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <h3 className="text-lg font-bold">
                  Data Structure Implementation and Analysis
                </h3>
                <p className="py-4">
                  Focuses on implementation and mathematical analysis of
                  fundamental data structures and algorithms. Covers storage
                  allocation and memory management techniques.
                </p>
              </div>
            </div>

            <label htmlFor="my-modal-45C" className="btn">
              ICS 45C
            </label>

            <input type="checkbox" id="my-modal-45C" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative">
                <label
                  htmlFor="my-modal-45C"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <h3 className="text-lg font-bold">Programming in C/C++</h3>
                <p className="py-4">
                  An introduction to the lexical, syntactic, semantic, and
                  pragmatic characteristics of the C/C++ languages for
                  experienced programmers. Emphasis on object-oriented
                  programming, using standard libraries, and programming with
                  manual garbage collection.
                </p>
              </div>
            </div>

            <label htmlFor="my-modal-45J" className="btn">
              ICS 45J
            </label>

            <input type="checkbox" id="my-modal-45J" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative">
                <label
                  htmlFor="my-modal-45J"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <h3 className="text-lg font-bold">Programming in Java</h3>
                <p className="py-4">
                  An introduction to the lexical, syntactic, semantic, and
                  pragmatic characteristics of the Java language for experienced
                  programmers. Emphasis on object-oriented programming, using
                  standard libraries, and programming with automatic garbage
                  collection.
                </p>
              </div>
            </div>

            <label htmlFor="my-modal-6N" className="btn">
              ICS 6N
            </label>

            <input type="checkbox" id="my-modal-6N" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative">
                <label
                  htmlFor="my-modal-6N"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <h3 className="text-lg font-bold">
                  Computational Linear Algebra
                </h3>
                <p className="py-4">
                  Matrices and linear transformations, systems of linear
                  equations, determinants, linear vector spaces, eigenvalues and
                  eigenvectors, orthogonal matrices, diagonalization, and least
                  squares. Topics taught primarily from an algorithmic
                  perspective, including computational solutions, applications,
                  and numerical error analysis.
                </p>
              </div>
            </div>

            <label htmlFor="my-modal-6D" className="btn">
              ICS 6D
            </label>

            <input type="checkbox" id="my-modal-6D" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative">
                <label
                  htmlFor="my-modal-6D"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <h3 className="text-lg font-bold">
                  Discrete Mathematics for Computer Science
                </h3>
                <p className="py-4">
                  Covers essential tools from discrete mathematics used in
                  computer science with an emphasis on the process of
                  abstracting computational problems and analyzing them
                  mathematically. Topics include mathematical induction,
                  combinatorics, and recurrence relations.
                </p>
              </div>
            </div>

            <label htmlFor="my-modal-6B" className="btn">
              ICS 6B
            </label>

            <input type="checkbox" id="my-modal-6B" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative">
                <label
                  htmlFor="my-modal-6B"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <h3 className="text-lg font-bold">
                  Boolean Logic and Discrete Structures
                </h3>
                <p className="py-4">
                  Relations and their properties; Boolean algebras, formal
                  languages; finite automata.
                </p>
              </div>
            </div>

            <label htmlFor="my-modal-139" className="btn">
              ICS 139W
            </label>

            <input type="checkbox" id="my-modal-139" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative">
                <label
                  htmlFor="my-modal-139"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <h3 className="text-lg font-bold">
                  Critical Writing on Information Technology
                </h3>
                <p className="py-4">
                  Study and practice of critical writing and oral communication
                  as it applies to information technology. Each student writes
                  assignments of varying lengths, totaling at least 4,000 words.
                </p>
              </div>
            </div>

            <label htmlFor="my-modal-67" className="btn">
              Stats 67
            </label>

            <input type="checkbox" id="my-modal-67" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative">
                <label
                  htmlFor="my-modal-67"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <h3 className="text-lg font-bold">
                  Introduction to Probability and Statistics for Computer
                  Science
                </h3>
                <p className="py-4">
                  Introduction to the basic concepts of probability and
                  statistics with discussion of applications to computer
                  science.
                </p>
              </div>
            </div>

            <label htmlFor="my-modal-131" className="btn">
              IN4MATX 131
            </label>

            <input type="checkbox" id="my-modal-131" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative">
                <label
                  htmlFor="my-modal-131"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <h3 className="text-lg font-bold">
                  Human Computer Interaction
                </h3>
                <p className="py-4">
                  Basic principles of human-computer interaction (HCI).
                  Introduces students to user interface design techniques,
                  design guidelines, and usability testing. Students gain the
                  ability to design and evaluate user interfaces and become
                  familiar with some of the outstanding research problems in
                  HCI.
                </p>
              </div>
            </div>

            <label htmlFor="my-modal-43" className="btn">
              IN4MATX 43
            </label>

            <input type="checkbox" id="my-modal-43" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative">
                <label
                  htmlFor="my-modal-43"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <h3 className="text-lg font-bold">
                  Introduction to Software Engineering
                </h3>
                <p className="py-4">
                  Concepts, methods, and current practice of software
                  engineering. Large-scale software production, software life
                  cycle models, principles and techniques for each stage of
                  development.
                </p>
              </div>
            </div>
            <button
              onClick={handlePlan}
              className="btn bg-red-900 hover:bg-red-950"
            >
              College Course Plan
            </button>
          </div>
        </div>
      </div>
      <div className="divider"></div>

      <div className="App-header1 place-content-around mt-10 ml-10 text-xl grid grid-cols-2 bg-[#fff]">
        <div className="grid grid-cols-1 justify-items-center justify-center text-black font-serif">
          <p>
            <b>I received my International Baccalaureate Diploma in 2021</b>
          </p>
          <ul>
            <li>*Computer Science Higher Level</li>
            <li>*Physics Higher Level</li>
            <li>*Math Higher Level</li>
            <li>*Environment System and Society Standard Level</li>
            <li>*English A Language and Literature Standard Level</li>
            <li>*Spanish Ab Initio Standard Level</li>

            <li>Completed the Extended Essay</li>
            <li>Completed the Theory of Knowledge</li>
            <li>Completed the CAS Requirements</li>
          </ul>
        </div>
        <div className="grid grid-cols-1 justify-items-center justify-center">
          <div className="md:w-1/2">
            <img src="./IB.jpeg" alt="" className="w-full rounded-lg" />
          </div>
        </div>
      </div>
      <div className="divider"></div>

      <div className="App-header1 grid grid-cols-2 place-content-around mt-10 ml-10 text-xl bg-[#fff]">
        <div className="font-serif text-black grid grid-cols-1">
          <p>I love to watch American Football and Basketball</p>
          <p>I am a big Seahawks and Trail Blazers fan</p>
          <p>I also like to play escape room.</p>
        </div>
        <div className="grid grid-cols-1 justify-items-center justify-center mb-10">
          <div className="md:w-1/2">
            <img src="./D2.png" alt="" className="w-full rounded-lg" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
