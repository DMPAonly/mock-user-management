import App from "./App";
import Detailed from "./pages/Detailed";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Index(){

    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/detailed" element={<Detailed />}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Index;