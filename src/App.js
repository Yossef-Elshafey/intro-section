import IntroSec from "./Components/IntroSec";
import Navbar from "./Components/navbar/Navbar";

function App() {
  return (
    <main className="bg-gray-400/20  ">
      <main className="lg:container mx-auto h-screen overflow-hidden ">
        <Navbar />
        <IntroSec />
      </main>
    </main>
  );
}

export default App;
