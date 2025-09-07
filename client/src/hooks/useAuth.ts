import { authApi } from '@/utils/auth';
import { User } from '@/utils/types';
import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const userData = await authApi.getMe();
      setUser(userData);
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string): Promise<void> => {
    try {
      const userData = await authApi.login({ email, password });
      setUser(userData);
    } catch (error) {
      throw error;
    }
  };

  const register = async (name: string, email: string, password: string, role: string): Promise<void> => {
    try {
      const userData = await authApi.register({ name, email, password, role });
      setUser(userData);
    } catch (error) {
      throw error;
    }
  };

  const logout = async (): Promise<void> => {
    try {
      await authApi.logout();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setUser(null);
    }
  };

  return { user, loading, login, register, logout, checkAuth };
};