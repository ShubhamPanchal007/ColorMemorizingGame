import ColorMemoryGame from "./components/ColorMemory";
import RegistrationForm from "./components/RegistrationForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ColorMemoryGame />} />
          {/* <Route path="/" element={<RegistrationForm />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
