import { useAuth } from "@clerk/clerk-react";
import { Navigate } from "react-router";

const ProtectedRoute = ({ el }) => {
    const { isSignedIn, isLoaded } = useAuth();
  
    if (!isLoaded) return <div>Loading...</div>;
    
    if (!isSignedIn) {
      return <Navigate to="/sign-in" />;
    }

    return el
}

export default ProtectedRoute;