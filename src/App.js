import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menus from "./components/Menus";
import Footer from "./components/Footer";
import Chef from "./components/Chef";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      {/* <Menus /> */}
      <Chef />
      <Footer />
    </div>
  );
}

export default App;
