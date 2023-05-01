import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import MainBody from "./components/MainBody";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <MainBody />
      <Footer />
    </div>
  );
}

export default App;
