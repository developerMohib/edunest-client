// client/src/hooks/useCurrentUser.ts
"use client";

import { useQuery } from "@tanstack/react-query";
import { api } from "@/utils/axiosInstance";

export interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
  image?: string;
}

const fetchCurrentUser = async (): Promise<User | null> => {
  const token = localStorage.getItem("token");
  if (!token) return null;

  const res = await api.get("/auth/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const useCurrentUser = () => {
  const query = useQuery<User | null>({
    queryKey: ["currentUser"],
    queryFn: fetchCurrentUser,
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 1,
  });

  return {
    user: query.data,
    isLoading: query.isLoading,
    isError: query.isError,
    refetch: query.refetch, // allows manual refetch
  };
};
