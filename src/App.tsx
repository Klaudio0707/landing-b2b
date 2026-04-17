import { About } from "./components/About";
// import { Benefits } from "./components/Benefits";
import { Differentials } from "./components/Differentials";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Differentials />
      {/* <Benefits/> */}
      <About/>
      <Footer/>
    </>
  );
}

export default App;
