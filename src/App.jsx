import About from "./components/About.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>
    <div className="min-w-[535px] max-w-screen-sm mx-auto py-16 px-8 selection:bg-gray-600 selection:text-white">
      <header>
        <Navbar />
      </header>
      <main>
        <About />
      </main>
    </div>
    </>
  );
}

export default App;
