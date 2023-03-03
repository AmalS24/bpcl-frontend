
import Login from "./Employee/Login";
import EmployeePage from "./Employee/HomePage";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import PivateRoute from "./components/PivateRoute";
import PageNotFound from "./components/PageNotFound";

function App() {
  
  return (
    <>
        <BrowserRouter>
          <div className="w-screen  h-screen bg-slate-300">
            <Routes>
              <Route path="/" element={<Login/>} exact/>
              <Route path="/404" element={<PageNotFound/>} exact/>
              <Route element={<PivateRoute/>}>
                <Route path="/user" element={<EmployeePage/>} exact/>
              </Route>
            </Routes>
          </div>
        </BrowserRouter>
    </>
  );
}

export default App;
