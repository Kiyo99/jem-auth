import Dashboard from "./pages/dashboard/dashboard";
import { Routes, Route } from "react-router-dom"
import Cafeteria from "./pages/cafeteria/cafeteria";
import Hostel from "./pages/hostel/hostel";
import WorkStudy from "./pages/work-study/work-study";
import Departments from "./pages/departments/departments";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/cafeteria' element={<Cafeteria />} />
      <Route path='/hostel' element={<Hostel />} />
      <Route path='/work-study' element={<WorkStudy />} />
      <Route path='/departments' element={<Departments />} />
    </Routes>
  );
}

export default App;

