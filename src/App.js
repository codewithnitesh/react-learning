import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";
import About from "./components/About";

function App() {
  return (
    <>
    <Navbar title="TextUtils"/>

    {/* <TextForm /> */}
    <div className="container">
      <About />
    </div>
    </>
  );
}

export default App;
