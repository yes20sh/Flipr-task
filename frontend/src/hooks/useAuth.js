// client/src/hooks/useAuth.js
import { useAuthContext } from '../contexts/AuthContext';

const useAuth = () => {
  const { authenticated, loading, setAuthenticated } = useAuthContext();
  return { authenticated, loading, setAuthenticated };
};

export default useAuth;
