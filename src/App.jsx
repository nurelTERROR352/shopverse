import Footer from "./components/Footer/Footer";
import Galaxy from "./components/Galaxy/Galaxy";
import Header from "./components/Header/Header";
import Our from "./components/Our/Our";
import Popular from "./components/Popular/Popular";
import Trending from "./components/Trending/Trending";
import Watch from "./components/Watch/Watch";

function App() {
  return (
    <div className="APP">
      <Header />
      <Watch />
      <Trending />
      <Popular />
      <Galaxy />
      <Our />
      <Footer />
    </div>
  );
}

export default App;
