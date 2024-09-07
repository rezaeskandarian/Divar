import { Navigate, Route, Routes } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/Dashboard";
import Autentication from "../pages/Authentication";

import { GetUser } from "../services/user";
import Admin from "../pages/Admin";

const Router = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["getuser"],
    queryFn: GetUser,
  });

  console.log({ data, isLoading, error });

 

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route
          path="/dashboard"
          element={data ? <Dashboard /> : <Navigate to="/auth" />}
        />
        <Route
          path="/auth"
          element={data ? <Navigate to="/dashboard" /> : <Autentication />}
        />
        <Route
          path="/admin"
          element={
            data && data.data.role === "ADMIN" ? <Admin /> : <Navigate to="/" />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Router;
