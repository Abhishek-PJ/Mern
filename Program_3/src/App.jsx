import PersonInfo from "./components/PersonInfo.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";

export default function App() {
  return (
    <div className="app-root">
      <div className="resume">
        <aside className="left">
          <PersonInfo
            name="Prashanth K"
            address="Kengeri, Bengaluru"
            phone="+91 12345 67890"
            email="prashanthk@rvce.edu.in"
          />
        </aside>

        <main className="right">
          <header className="header">
            <h1 className="title">Resume</h1>
            <p className="subtitle">Frontend Developer | React</p>
          </header>

          <Education />
          <Experience />
        </main>
      </div>
    </div>
  );
}
