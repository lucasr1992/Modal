import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Teste } from "../page/Home/home";

export function AppRoutes(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Teste />}/>

      </Routes>
    </Router>
  )
}