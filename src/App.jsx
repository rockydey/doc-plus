import "./App.css";
import Footer from "./components/Shared/Footer/Footer";
import Header from "./components/Shared/Header/Header";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
      <Header />
      <div className='max-w-[1160px] mx-auto'>
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
