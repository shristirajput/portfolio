import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";



function App() {
  console.log("Env test:", process.env.REACT_APP_EMAILJS_SERVICE_ID
);

  return (
    <main className="pt-16">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certificates />
      <Contact />

      {/* Environment Variable Test Section */}
      <section className="py-10 bg-gray-200 text-center">
        <h1 className="text-2xl font-bold mb-4">Environment Variable Test</h1>
        <p className="text-gray-700">{process.env.REACT_APP_EMAILJS_SERVICE_ID
}</p>
      </section>
    </main>
  );
}

export default App;
