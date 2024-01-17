import { lazy, Suspense } from "react";

import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
const Dashboard =  lazy(() => import("./components/Dashboard"))
const Landing =  lazy(()=> import("./components/Landing"))

function App() {
  return (
    <div>
      <BrowserRouter>
      <AppBar/>
      <Suspense fallback="Loading...}">
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/" element={<Landing/>}></Route>
        </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}


function AppBar() {
  const navigate = useNavigate()
  return (
  <div>
    <div>
        <button onClick={() => {
          navigate("/")
        }}>Landing Page</button>
        <button onClick={() => {
          navigate("/dashboard")
        }}>Dashboard</button>
        </div>
      </div>
  )
}

export default App;
