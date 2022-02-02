import "./App.css";
import Toaster from "./Toaster";
import Text from "./Text";
import Toast from "./Toast";
import { useState } from "react";
function App() {
  const [isDown, setIsDown] = useState(false);

  return (
    <div className="App">
      <Text />
      <Toaster isDown={isDown} setIsDown={setIsDown} />
      <Toast isDown={isDown} setIsDown={setIsDown} />
    </div>
  );
}

export default App;
