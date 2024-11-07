import { Navigate, Outlet } from 'react-router-dom';


function ProtectedRoute({ user }) {
  return user?.role === 0 ? <Outlet /> : <Navigate to="/login" />;
}

function AdminRoute({ user }) {
  return user?.role === 1  || user?.role === 0 ? <Outlet /> : <Navigate to="/dashboard" />;
}

export { ProtectedRoute, AdminRoute };
