"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider
      refetchInterval={5 * 60} // Refetch session every 5 minutes
      refetchOnWindowFocus={true}
    >
      {children}
    </SessionProvider>
  );
};

export default AuthProvider;