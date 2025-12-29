import { Navigate } from "react-router-dom";

export default function publicAdminRoute({ children }) {
  const token = localStorage.getItem("token");

  // Si YA está logueado, lo mandamos al dashboard
  if (token) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  // Si NO está logueado, puede ver el login
  return children;
}
