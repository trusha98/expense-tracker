import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Plan from "./components/Plan";
import Slider from "./components/Slider";
import Work from "./components/Work";

function App() {
  console.log("App component rendered 11");
  return (
    <>
      <Navbar />
      <Hero />
      <About
        title="Alwalys online"
        subtitle="Real-time support with cloud"
        description="Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget ut."
        button="Try free demo"
        imageUrl="/assets/about1.png"
        imageLeft={false}
      />
      <About
        title="free some cost"
        subtitle="Save cost for you and family"
        description="Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget ut."
        button="Try free demo"
        imageUrl="/assets/about (2).png"
        imageLeft={true}
      />
       <About
        title="Use anytime"
        subtitle="Use anytime when you need"
        description="Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget ut."
        button="Try free demo"
        imageUrl="/assets/about (3).png"
        imageLeft={false}
      />
      <Work/>
      <Plan/>
      <Slider/>
      <Footer/>
    </>
  );
}

export default App;
