import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import AnimatedRoutes from "./AnimatedRoutes";
import authContext from "./store/context";
import "./App.css";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <Router>
      <authContext.Provider
        value={{
          isAuth,
          setIsAuth,
        }}
      >
        <AnimatedRoutes />
      </authContext.Provider>
    </Router>
  );
}

export default App;
