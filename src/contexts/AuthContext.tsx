
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define user type
type User = {
  id: string;
  name: string;
  role: 'customer' | 'partner';
  email?: string;
};

// Define auth context state
type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string, role: 'customer' | 'partner') => Promise<void>;
  logout: () => void;
};

// Create the context with default values
const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  login: async () => {},
  logout: () => {},
});

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);

// Auth provider component
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing session on component mount
  useEffect(() => {
    const checkAuthStatus = () => {
      // In a real app, this would check a token in localStorage or cookies
      const storedUser = localStorage.getItem('quickdeliver_user');
      
      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser));
        } catch (error) {
          localStorage.removeItem('quickdeliver_user');
          setUser(null);
        }
      }
      
      setIsLoading(false);
    };

    checkAuthStatus();
  }, []);

  // Mock login function - in a real app, this would call your API
  const login = async (email: string, password: string, role: 'customer' | 'partner') => {
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user data based on role
      const mockUser = {
        id: Math.random().toString(36).substring(2, 9),
        name: role === 'customer' ? 'John Doe' : 'Alex Smith',
        role: role,
        email: email
      };
      
      // Store user in localStorage (in a real app, you'd store a token)
      localStorage.setItem('quickdeliver_user', JSON.stringify(mockUser));
      setUser(mockUser);
      
    } catch (error) {
      console.error('Login error:', error);
      throw new Error('Login failed. Please check your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('quickdeliver_user');
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
