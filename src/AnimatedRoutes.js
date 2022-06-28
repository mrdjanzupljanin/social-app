import React from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Home from "./components/pages/Home";
import Post from "./components/pages/Post";
import UserPage from "./components/pages/UserPage";
import AddPost from "./components/pages/AddPost";
import Ex from "./components/Layout/Ex";
import AdminPage from "./components/pages/AdminPage";
import Blocked from "./components/Layout/Blocked";
import ExampleFilter from "./components/Layout/ExampleFilter";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/post" element={<Post />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addpost" element={<AddPost />} />
        <Route path="/error" element={<Ex />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/blocked" element={<Blocked />} />
        <Route path="/filter" element={<ExampleFilter />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
