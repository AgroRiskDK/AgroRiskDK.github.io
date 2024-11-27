import { TUser } from "@/pages/SignIn/api";
import { Auth0Provider } from "@auth0/auth0-react";
import { createContext, ReactNode, useContext, useState } from "react";

// Define the AuthContext type
type AuthContextType = {
  user: TUser | null;
  setUser: (Auth: TUser | null) => void;
};

// Create the AuthContext with default values
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Create a provider component
export const AppAuth0Context: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<TUser | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
       <Auth0Provider
        domain={import.meta.env.VITE_AUTH0_DOMAIN}
        clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
        authorizationParams={{
          redirect_uri: window.location.origin
        }}>
        {children}
      </Auth0Provider>
    </AuthContext.Provider>
  );
};

// Create a custom hook to use the UserContext
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within a UserProvider');
  }

  return context;
};
