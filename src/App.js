import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";
import "./App.css";
import authContext from "./store/context";
import { useState } from "react";

function App() {
const [isAuth, setIsAuth] = useState(false)
  return (
    <Router>
      <authContext.Provider value={{
        isAuth,
        setIsAuth
      }}>
        <AnimatedRoutes />
      </authContext.Provider>
    </Router>
  );
}

export default App;
