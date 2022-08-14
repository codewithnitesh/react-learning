import { useState } from "react";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({
      message,
      type
    })

    setTimeout(() => setAlert(null), 2000)
  }

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white'; 
    } else {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("success", "Dark mode is enabled");
    }
  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />

      <div className="container" >
        <TextForm mode={mode} showAlert={showAlert} />
      </div>
    </>
  );
}

export default App;
