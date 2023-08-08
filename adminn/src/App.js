import './App.css';
import {Adminka} from "./pages/adminka";
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/home";

function App() {
  return (
    <>
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/Adminka'} element={<Adminka/>}/>
        </Routes>

    </>
  );
}

export default App;
