import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {

  const currentUser = localStorage.getItem("reduxCurrentUser");

  if (!currentUser) {
    return <Navigate to="/signin" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;