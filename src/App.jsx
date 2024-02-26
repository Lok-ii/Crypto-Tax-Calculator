import "./App.css";
import Faq from "./Components/Faq";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Context from "./Context/Context";

function App() {
  document.title = "Crypto Tax Calculator"
  return (
    <Context>
      <div className="w-full">
        <Header />
        <Home />
        <Footer />
      </div>
    </Context>
  );
}

export default App;
