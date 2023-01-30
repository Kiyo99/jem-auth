import InitialPage from "./pages/initial-page/initial-page";
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path='/' element={<InitialPage />} />
      {/* <Route path="/signup" element={<SignUp />} /> */}
    </Routes>
  );
}

export default App;