
import Login from "./Employee/Login";
import EmployeePage from "./Employee/HomePage";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import PivateRoute from "./components/PivateRoute";
import PageNotFound from "./components/PageNotFound";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  
  return (
    <>
        <BrowserRouter>
          <div className="w-screen h-auto min-h-screen bg-slate-300">
            <Routes>
              <Route path="/" element={<Login/>} exact/>
              <Route element={<PivateRoute/>}>
                <Route path="/user" element={<EmployeePage/>} exact/>
              </Route>
              <Route element={<ProtectedRoute/>}>
                <Route path="/admin" element={<EmployeePage/>} exact/>
              </Route>
              <Route path="/404" element={<PageNotFound/>} exact/>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
    </>
  );
}

export default App;
