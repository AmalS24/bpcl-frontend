
import Login from "./Employee/Login";
import EmployeePage from "./Employee/HomePage";
import { BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  
  return (
    <>
        <BrowserRouter>
          <div className="w-screen  h-screen bg-slate-300">
            <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/user" element={<EmployeePage/>}/>
            </Routes>
          </div>
        </BrowserRouter>
    </>
  );
}

export default App;
