import React from 'react';
import "./App.css";
import Navbar from "./components/Navbar";
import Gratis from "./components/Gratis";
import Cards from "./components/Cards";
import Pointer from "./components/Pointer";
import Pages from "./components/Pages";
import Gallery from "./components/Gallery";
import Sponsor from "./components/Sponsor";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <header className="header">
        <Navbar />
      </header>
      <main>
        <section>
          <Gratis />
        </section>
        <section>
          <Cards />
        </section>
        <section>
          <Pointer />
        </section>
        <section>
          <Pages />
        </section>
        <section>
          <Gallery />
        </section>
        <section>
          <Sponsor />
        </section>
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
