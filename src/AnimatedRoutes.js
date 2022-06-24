import React from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Post from "./components/Post";
import UserPage from "./components/UserPage";
import AddPost from "./components/AddPost";
import DeleteComment from "./components/Layout/DeleteComment";
import Ex from "./components/Layout/Ex";
import AdminPage from "./components/AdminPage";
import Blocked from "./components/Layout/Blocked";
import Filter from "./components/Layout/Filter";
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
